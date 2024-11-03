import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { WindSpeedWidgetComponent } from './wind-speed-widget.component';
import { WindSpeedWidgetService } from '../../services/wind-speed-widget/wind-speed-widget.service';

describe('WindSpeedWidgetComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindSpeedWidgetComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WindSpeedWidgetComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should have a wind speed title', () => {
    const fixture = TestBed.createComponent(WindSpeedWidgetComponent);
    fixture.detectChanges();
    
    const DOM = fixture.nativeElement as HTMLElement;
    const header = DOM.querySelector('lib-widget-header')
    expect(header).toBeTruthy();
  });

  it('should display wind speed content', () => {
    const fixture = TestBed.createComponent(WindSpeedWidgetComponent);
    fixture.detectChanges();
    
    const component = fixture.componentInstance;

    component['_service']['_windspeed$'].next(23);
    fixture.detectChanges();
    
    const DOM = fixture.nativeElement as HTMLElement;
    const content = DOM.querySelector('lib-widget-content')
    expect(content).toBeTruthy();
  });
  
});
