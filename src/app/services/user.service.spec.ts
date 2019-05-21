import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { UserComponent } from '../components/user/user.component';
import { UserService } from './user.service';


describe('UserService', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: UserService }
      ]
    })
    /**
     * After the promise that the compileComponents function resolves we
     * are giving a value to each of the variables that we declare at the beginning
     */
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserComponent);
      component = fixture.componentInstance;
    });
  }));

});
