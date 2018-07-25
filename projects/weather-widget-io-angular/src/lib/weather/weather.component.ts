import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'wwio-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.less'],
    inputs: [
        "forecast7Url: url"
    ]
})
export class WeatherComponent implements OnInit
{

    constructor(
        @Inject(DOCUMENT) private document: any, // Using 'Document' type causes build error: "Metadata collected contains an error that will be reported at runtime: Could not resolve type Document."
    )
    {
        this.forecast7Url = "https://forecast7.com/en/43d66n70d26/portland/?unit=us";
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

    public forecast7Url: string;

}
