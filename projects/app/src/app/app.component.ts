import { DOCUMENT, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReplaySubject, switchMap } from 'rxjs';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { TemperatureWidgetComponent } from "../../../widget/src/lib/components/temperature-widget/temperature-widget.component";
import { WindSpeedWidgetComponent } from "../../../widget/src/lib/components/wind-speed-widget/wind-speed-widget.component";
import { WidgetComponent } from "../../../widget/src/lib/components/widget/widget.component";
import { WidgetContentComponent } from "../../../widget/src/lib/components/widget-content/widget-content.component";
import { WidgetHeaderComponent } from "../../../widget/src/lib/components/widget-header/widget-header.component";
import { CustomWidgetComponent } from "./components/custom-widget/custom-widget.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    ToolbarComponent,
    TemperatureWidgetComponent,
    WindSpeedWidgetComponent,
    WidgetComponent,
    WidgetContentComponent,
    WidgetHeaderComponent,
    CustomWidgetComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
