import { Injectable } from '@angular/core';
import { WeatherWidgetService } from '../weather-widget/weather-widget.service';
import { firstValueFrom, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureWidgetService extends WeatherWidgetService {
  private readonly _temperature$ = new ReplaySubject<number | undefined>(1);
  readonly temperature$ = this._temperature$.asObservable();

  override reload(): void {
    this._temperature$.next(undefined);
    firstValueFrom(super.fetchWeather()).then((response) => {
      this._temperature$.next(response.temperature);
    });
  }
}
