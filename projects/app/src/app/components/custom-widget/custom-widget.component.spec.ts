import { TestBed } from '@angular/core/testing';

import { CustomWidgetComponent } from './custom-widget.component';

describe('CustomWidgetComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomWidgetComponent]
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CustomWidgetComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  it("should render a widget", () => {
    const fixture = TestBed.createComponent(CustomWidgetComponent);
    fixture.detectChanges();

    const DOM = fixture.nativeElement as HTMLElement;

    const widget = DOM.querySelector('lib-widget') as HTMLElement;
    expect(widget).toBeTruthy();
    expect(widget.childNodes.length).toBe(2);
  });


  it("should render a widget header", () => {
    const fixture = TestBed.createComponent(CustomWidgetComponent);
    fixture.detectChanges();

    const DOM = fixture.nativeElement as HTMLElement;

    const widgetHeader = DOM.querySelector('lib-widget-header') as HTMLElement;
    expect(widgetHeader).toBeTruthy();
    expect(widgetHeader.childNodes.length).toBeGreaterThan(0);

    const title = widgetHeader.querySelector('h2') as HTMLElement;
    expect(title).toBeTruthy();
    expect(title.innerText).toBe('Custom Title');
  });

  it("should render a widget content", (done) => {
    const fixture = TestBed.createComponent(CustomWidgetComponent);
    fixture.detectChanges();

    const DOM = fixture.nativeElement as HTMLElement;

    const widgetContent = DOM.querySelector('lib-widget-content') as HTMLElement;
    expect(widgetContent).toBeTruthy();
    expect(widgetContent.childNodes.length).toBeGreaterThan(0);

    DOM.click();

    setTimeout(() => {
      fixture.detectChanges();

      const content = widgetContent.querySelector('small') as HTMLElement;
      expect(content).toBeTruthy();
      expect(content.innerText).toBeInstanceOf(String)
      done();
    }, 200);



  });
});
