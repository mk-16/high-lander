import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TemperatureWidgetService } from '../../services/temperature-widget/temperature-widget.service';
import { WidgetContentComponent } from "../widget-content/widget-content.component";
import { WidgetHeaderComponent } from "../widget-header/widget-header.component";
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'lib-temperature-widget',
  standalone: true,
  imports: [WidgetHeaderComponent, WidgetContentComponent, AsyncPipe, NgIf],
  templateUrl: './temperature-widget.component.html',
  styleUrls: ['./../widget/widget.component.css', './temperature-widget.component.css']
})
export class TemperatureWidgetComponent extends WidgetComponent {
  protected override _service = inject(TemperatureWidgetService);
  temperature$ = this._service.temperature$;
}