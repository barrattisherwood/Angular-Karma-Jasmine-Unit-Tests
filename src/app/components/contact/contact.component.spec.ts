import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  /**
   * The first part of the beforeEach is setting all the needed dependencies to start the test module.
   * The purpose of the async is to let all the possible asynchronous code finish before continuing.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    /**
     * After the promise that the compileComponents function resolves we
     * are giving a value to each of the variables that we declare at the beginning
     */
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  /**
   * This test expects that the component instance has the expected value of the "text" property.
   */
  it(`should have as text 'contact page'`, async(() => {
    expect(component.text).toEqual('contact page');
  }));

  /**
   * This test expects the property of the component "submitted" to be true when the "onSubmit" function is called.
   */
  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  /**
   * This test applies the component state to the HTML with the function "detectChanges" of the "fixture" object.
   * Then we create a jasmine "spy" on the "onSubmit" function of the component.
   * Then it gets the submit button from the DOM and triggers the click event.
   * Finally, we expect that the spied function is not executed, because the button should be disabled since the form is not valid.
   */
  it(`should call the onSubmit method`, async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  /**
   * This test sets invalid values to the component form and expects the form valid property to be false.
   */
  it(`form should be invalid`, async(() => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  /**
   * This test sets valid values to the component form and expects the form valid property to be true.
   */
  it(`form should be valid`, async(() => {
    component.contactForm.controls['email'].setValue('User_Test@testdomain.com');
    component.contactForm.controls['name'].setValue('User_Test');
    component.contactForm.controls['text'].setValue('User Test Text');
    expect(component.contactForm.valid).toBeTruthy();
  }));

});
