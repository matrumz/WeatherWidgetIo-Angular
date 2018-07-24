import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetIoAngularComponent } from './weather-widget-io-angular.component';

describe('WeatherWidgetIoAngularComponent', () => {
  let component: WeatherWidgetIoAngularComponent;
  let fixture: ComponentFixture<WeatherWidgetIoAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherWidgetIoAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetIoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
