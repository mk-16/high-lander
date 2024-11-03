import { TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { WidgetContentComponent } from './widget-content.component';

describe('WidgetContentComponent', () => {
  @Component({
    styles: '',
    imports: [WidgetContentComponent],
    template: `
      <lib-widget-content>
        some content
      </lib-widget-content>
  `,
  })
  class TestHostComponent { }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetContentComponent],
      providers: [TestHostComponent]
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WidgetContentComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  it('should render content', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const DOM = fixture.nativeElement as HTMLElement;
    const content = DOM.querySelector('lib-widget-content')
    const childNodes = content?.childNodes

    expect(childNodes?.length).toBeGreaterThan(0);
  });

});
