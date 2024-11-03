import { TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { Component } from '@angular/core';

describe('ToolbarComponent', () => {
  @Component({
    styles: '',
    imports: [ToolbarComponent],
    template: `
    <app-toolbar>
    <h1>my app</h1>
    </app-toolbar>
`,
  })
  class TestHostComponent { }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent]
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ToolbarComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });


  it("should render toolbar's content", () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const DOM = fixture.nativeElement as HTMLElement;
    const toolbar = DOM.querySelector('app-toolbar') as HTMLElement;
    const childNodes = toolbar.childNodes;

    expect(childNodes.length).toBeGreaterThan(0);
  });
});
