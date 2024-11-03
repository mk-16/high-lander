import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHeaderComponent } from './widget-header.component';
import { Component } from '@angular/core';

describe('WidgetHeaderComponent', () => {
  @Component({
    styles: '',
    imports: [WidgetHeaderComponent],
    template: `
      <lib-widget-header>
        some content
      </lib-widget-header>
  `,
  })
  class TestHostComponent { }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetHeaderComponent],
      providers: [TestHostComponent]
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WidgetHeaderComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const DOM = fixture.nativeElement as HTMLElement;
    const header = DOM.querySelector('lib-widget-header')
    const childNodes = header?.childNodes

    expect(childNodes?.length).toBeGreaterThan(0);
  });

});
