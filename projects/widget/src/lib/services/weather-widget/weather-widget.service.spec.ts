import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { WeatherWidgetService } from './weather-widget.service';
import { WeatherAPIResponse } from '../../utils/models/weather-api-response';

describe('WeatherWidgetService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    });

  });

  it('should be created', () => {
    const service = TestBed.inject(WeatherWidgetService);
    expect(service).toBeTruthy();
  });

  it('should build API get call', (done) => {
    const httpTester = TestBed.inject(HttpTestingController);
    const service = TestBed.inject(WeatherWidgetService);
    service['buildRequest']((request) => {
      firstValueFrom(request)
      const httpClient = httpTester.expectOne(request => {
        return request.url.includes('https://api.open-meteo.com/v1/forecast');
      });
      expect(httpClient.request.method).toBe('GET');
      httpClient.flush({})
      done();
    })
  });


});
