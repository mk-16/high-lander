import { DOCUMENT, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WidgetContentComponent } from "../../../../../widget/src/lib/components/widget-content/widget-content.component";
import { WidgetHeaderComponent } from "../../../../../widget/src/lib/components/widget-header/widget-header.component";
import { WidgetComponent } from "../../../../../widget/src/lib/components/widget/widget.component";
import { WidgetService } from '../../../../../widget/src/public-api';

@Component({
  selector: 'app-custom-widget',
  standalone: true,
  imports: [WidgetComponent, WidgetHeaderComponent, WidgetContentComponent, NgIf],
  providers: [{
    provide: WidgetService, useClass: class {
      reload() { }
    }
  }],
  templateUrl: './custom-widget.component.html',
  styleUrl: './custom-widget.component.css'
})
export class CustomWidgetComponent extends WidgetComponent {
  private window = inject(DOCUMENT).defaultView;
  customContent: string | undefined;
  constructor() {
    super();
  }

  override clickHandler() {
    this.customContent = undefined;
    setTimeout(() => {
      this.customContent = this.window?.crypto.randomUUID();
    }, 100);
  }
}
