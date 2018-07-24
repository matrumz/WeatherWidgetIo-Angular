import { NgModule } from '@angular/core';
import { WeatherWidgetIoAngularComponent } from './weather-widget-io-angular.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  imports: [
  ],
  declarations: [WeatherWidgetIoAngularComponent, WeatherComponent],
  exports: [WeatherWidgetIoAngularComponent]
})
export class WeatherWidgetIoAngularModule { }
