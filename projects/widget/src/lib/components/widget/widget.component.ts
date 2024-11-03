import { Component, HostListener, inject } from '@angular/core';
import { WidgetHeaderComponent } from "../widget-header/widget-header.component";
import { WidgetContentComponent } from '../widget-content/widget-content.component';
import { WidgetService } from '../../services/widget/widget.service';

@Component({
  selector: 'lib-widget',
  standalone: true,
  imports: [WidgetHeaderComponent, WidgetContentComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {
  protected _service = inject(WidgetService);

  @HostListener('click')
  clickHandler() {
    this._service.reload();
  }
}
