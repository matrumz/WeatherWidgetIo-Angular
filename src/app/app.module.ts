import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherWidgetIoAngularModule } from "weather-widget-io-angular";

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        WeatherWidgetIoAngularModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
