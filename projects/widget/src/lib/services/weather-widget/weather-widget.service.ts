import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, firstValueFrom, Observable, ReplaySubject, Subject } from 'rxjs';
import { GeoLocationService } from '../geo-location/geo-location.service';
import { WidgetService } from '../widget/widget.service';
import { ParsedWeatherResponse, WeatherAPIResponeCallback, WeatherAPIResponse, WeatherAPIResponseGuard } from '../../utils/models/weather-api-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherWidgetService extends WidgetService {
  private readonly _http = inject(HttpClient);
  private readonly _geolocationService = inject(GeoLocationService);



  protected fetchWeather() {
    const weather$ = new ReplaySubject<Readonly<ParsedWeatherResponse>>(1);
    this.executeRequest(rawResponse => {
      const frozenRawResponse = Object.freeze(rawResponse);
      if (!WeatherAPIResponseGuard(frozenRawResponse))
        return this.apiErrorsHandler('either the api is broken, or data is corrupted');

      const frozenParsedResponse = this.parseWeatherAPI(frozenRawResponse)
      weather$.next(frozenParsedResponse);
    })
    return weather$;
  }

  override reload() {
    this.fetchWeather();
  }

  private executeRequest(callbackFunction: WeatherAPIResponeCallback) {
    this.buildRequest((source) => {
      firstValueFrom(source)
        .then(callbackFunction)
    })
  }

  private buildRequest(callbackFunction: (value: Observable<unknown>) => unknown) {
    this._geolocationService.getCurrentPosition((position => {
      const request = this._http.get<unknown>(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
        .pipe(catchError(error => {
          this.apiErrorsHandler(error);
          return EMPTY;
        }));
      callbackFunction(request)
    }))
  }

  private parseWeatherAPI(response: WeatherAPIResponse) {
    const parsedResponse = new ParsedWeatherResponse()
    parsedResponse.windSpeed = response.current.wind_speed_10m;
    parsedResponse.temperature = response.current.temperature_2m;
    return Object.freeze(parsedResponse);
  }

  private apiErrorsHandler(error: unknown) {
    alert('error handled, logs were sent, check console');
    throw error;
  }


}
