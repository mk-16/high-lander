import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';
import { Component } from '@angular/core';
import { WidgetHeaderComponent } from '../widget-header/widget-header.component';
import { WidgetContentComponent } from '../widget-content/widget-content.component';
import { WidgetService } from '../../../public-api';

describe('WidgetComponent', () => {
  @Component({
    styles: '',
    imports: [WidgetHeaderComponent, WidgetContentComponent],
    template: `
    <lib-widget>
      <lib-widget-header>
        <h3>hello world</h3>
      </lib-widget-header>
      <lib-widget-content>
        some content
      </lib-widget-content>
  </lib-widget>
  `,
  })
  class TestHostComponent { }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetComponent],
      providers: [TestHostComponent]
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WidgetComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  it('should have a title', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const DOM = fixture.nativeElement as HTMLElement;
    const header = DOM.querySelector('lib-widget-header')

    expect(header).toBeTruthy();
  });

  it('should display content', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const DOM = fixture.nativeElement as HTMLElement;
    const content = DOM.querySelector('lib-widget-content')

    expect(content).toBeTruthy();
  });

});
