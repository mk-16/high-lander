import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render a toolbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const DOM = fixture.nativeElement as HTMLElement;
    expect(DOM.querySelector('app-toolbar')).toBeTruthy();
  });

  it('should render the context', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const DOM = fixture.nativeElement as HTMLElement;
    expect(DOM.querySelector('main')?.firstChild?.firstChild?.nodeName).toBe('HEADER');
  });

  it('should render the main content', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const DOM = fixture.nativeElement as HTMLElement;
    expect(DOM.querySelector('main')?.lastChild?.nodeName).toBe('SECTION');
    expect(DOM.querySelector('main')?.childNodes.length).toBe(2);
  });

  it('the main content should render only widgets', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const DOM = fixture.nativeElement as HTMLElement;
    const mainBody = DOM.querySelector('main')?.children?.
      item((DOM.querySelector('main')?.children.length ?? 0) - 1);

    for (let index = 0; index < (mainBody?.children.length ?? 0); index++) {
      const childElement = mainBody?.children.item(index);
      expect(childElement?.nodeName).toContain('WIDGET');
    }
  });

});