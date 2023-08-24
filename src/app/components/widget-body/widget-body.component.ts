import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from 'src/app/models/widget';

@Component({
  selector: 'app-widget-body',
  templateUrl: './widget-body.component.html',
  styleUrls: ['./widget-body.component.scss']
})
export class WidgetBodyComponent {
  @Input() widget!: Widget;
  @Output() delete = new EventEmitter<string>();

  onDelete(id: string): void {
    this.delete.emit(id);
  }
}
