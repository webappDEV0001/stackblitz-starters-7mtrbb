import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { Widget } from 'src/app/models/widget';
import { WidgetCollection } from 'src/app/models/widget-collection';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetContainerComponent implements OnInit {
  public widgets = new BehaviorSubject<Widget[]>([]);
  get totalPrice(): number {
    return this.widgets.value.reduce((prev, cur) => {
      return prev + cur.price;
    }, 0);
  }
  get numberOfWidgets(): number {
    return this.widgets.value.length;
  }
  private readonly destroy$ = new Subject();
  constructor(private widgetService: WidgetService) {}

  ngOnInit(): void {
    this.widgetService.getWidgets().pipe(
      takeUntil(this.destroy$)
    ).subscribe((widgets) => (this.widgets.next(Object.values(widgets))));
  }

  onDelete(id: string) {
    this.widgetService.deleteWidget(id).pipe(
      takeUntil(this.destroy$)
    ).subscribe((resp) => {
      if (resp?.status === 'OK') {
        let curWidgets = this.widgets.value;
        this.widgets.next(curWidgets.filter(curWidget => curWidget.id !== id));
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  } 
}
