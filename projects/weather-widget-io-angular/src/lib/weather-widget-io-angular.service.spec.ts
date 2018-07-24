import { TestBed, inject } from '@angular/core/testing';

import { WeatherWidgetIoAngularService } from './weather-widget-io-angular.service';

describe('WeatherWidgetIoAngularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherWidgetIoAngularService]
    });
  });

  it('should be created', inject([WeatherWidgetIoAngularService], (service: WeatherWidgetIoAngularService) => {
    expect(service).toBeTruthy();
  }));
});
