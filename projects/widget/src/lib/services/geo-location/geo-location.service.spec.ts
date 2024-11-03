import { TestBed } from '@angular/core/testing';

import { GeoLocationService } from './geo-location.service';

describe('GeoLocationService', () => {
  let service: GeoLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide current position', (done) => {
    service.getCurrentPosition((position) => {
      expect(position.coords.latitude).toBeTruthy();
      expect(position.coords.longitude).toBeTruthy();
      done();
    })
  });
});
