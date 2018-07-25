import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IWeatherWidgetIoWidget } from '../models/weather-widget-io-widget';

@Component({
    selector: 'wwio-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.less'],
    inputs: [
        "widget.href: url"
    ]
})
export class WeatherComponent implements OnInit
{

    constructor(
        @Inject(DOCUMENT) private document: any, // Using 'Document' type causes build error: "Metadata collected contains an error that will be reported at runtime: Could not resolve type Document."
    )
    {
        this.widget = {} as IWeatherWidgetIoWidget;
    }

    ngOnInit()
    {
        this.wwioInit();
    }

    private wwioInit(): void
    {
        let d = this.document;
        const s: string = "script";
        const id: string = "weatherwidget-io-js";

        let js;
        let fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://weatherwidget.io/js/widget.min.js';
            fjs.parentNode.insertBefore(js, fjs);
        }
    }

    public widget: IWeatherWidgetIoWidget;

}
