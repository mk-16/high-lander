import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WindSpeedWidgetService } from '../../services/wind-speed-widget/wind-speed-widget.service';
import { WidgetContentComponent } from "../widget-content/widget-content.component";
import { WidgetHeaderComponent } from "../widget-header/widget-header.component";
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'lib-wind-speed-widget',
  standalone: true,
  imports: [WidgetHeaderComponent, WidgetContentComponent, AsyncPipe, NgIf],
  templateUrl: './wind-speed-widget.component.html',
  styleUrls: ['./../widget/widget.component.css', './wind-speed-widget.component.css']
})
export class WindSpeedWidgetComponent extends WidgetComponent {
  protected override _service = inject(WindSpeedWidgetService);
  windspeed$ = this._service.windspeed$;
}
