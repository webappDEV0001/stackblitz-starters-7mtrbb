import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.scss']
})
export class WidgetHeaderComponent {
  @Input() numberOfWidgets = 0;
  @Input() totalPrice = 0;
}
