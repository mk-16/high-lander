import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TemperatureWidgetComponent } from './temperature-widget.component';
import { TemperatureWidgetService } from '../../services/temperature-widget/temperature-widget.service';

describe('TemperatureWidgetComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureWidgetComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TemperatureWidgetComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have a temperature title', () => {
    const fixture = TestBed.createComponent(TemperatureWidgetComponent);
    fixture.detectChanges();

    const DOM = fixture.nativeElement as HTMLElement;
    const header = DOM.querySelector('lib-widget-header')
    expect(header).toBeTruthy();
  });

  it('should display temperature content', () => {
    const fixture = TestBed.createComponent(TemperatureWidgetComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;

    component['_service']['_temperature$'].next(23);
    fixture.detectChanges();

    const DOM = fixture.nativeElement as HTMLElement;
    const content = DOM.querySelector('lib-widget-content')
    expect(content).toBeTruthy();
  });

});
