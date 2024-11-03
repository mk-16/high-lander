import { Injectable } from '@angular/core';
import { WeatherWidgetService } from '../weather-widget/weather-widget.service';
import { firstValueFrom, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindSpeedWidgetService extends WeatherWidgetService {
  private readonly _windspeed$ = new ReplaySubject<number | undefined>(1);

  readonly windspeed$ = this._windspeed$.asObservable();

  override reload(): void {
    this._windspeed$.next(undefined);
    firstValueFrom(super.fetchWeather())
      .then((response => {
        this._windspeed$.next(response.windSpeed);
      }));
  }
}
