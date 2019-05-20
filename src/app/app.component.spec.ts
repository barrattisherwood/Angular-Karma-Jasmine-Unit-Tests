/**
 * We import all the angular testing tools that we are going to use.
 */
import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

/**
 * We import all the dependencies that this component has.
 */
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';

/**
 * We use a "describe" to start our test block with the title matching the tested component name.
 */
describe('AppComponent', () => {
  const routes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/', pathMatch: 'full'}
  ];
  /**
   * We use an async before each.
   * The purpose of the async is to let all the possible asynchronous code to finish before continuing.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * In this test, we are checking that the component actually contains the expected text in the "title" property.
   */
  it(`should have as title 'angular-unit-testing'`, () => {
    /**
     * Firstly, we need to create an instance of the app.component.
     * For that we use the create component function of the Angular test bed.
     */
    const fixture = TestBed.createComponent(AppComponent);
    /**
     * As a result, we get a fixture object that is going to allows us to create an instance of that component.
     */
    const app = fixture.debugElement.componentInstance;
    /**
     * Now that we have an instance of app.component, we can check the value in the text property and
     * compare that value to the expected one.
     */
    expect(app.title).toEqual('angular-unit-testing');
  });

  /**
   * This checks if the DOM renders the "text" property
   */
  it('should render title in a h1 tag', () => {
    /**
     * Firstly, we need to create an instance of the app.component.
     * For that we use the create component function of the Angular test bed.
     */
    const fixture = TestBed.createComponent(AppComponent);
    /**
     * Monitors changes on the created instance
     */
    fixture.detectChanges();
    /**
     * The native element instance of the compiled HTML is created (the HTML rendered by the component).
     */
    const compiled = fixture.debugElement.nativeElement;
    /**
     * Selects the h1 containing the text value and expects that the selected HTML contains the expected value.
     */
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-unit-testing!');
  });
});
