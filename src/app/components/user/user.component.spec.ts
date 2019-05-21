import { UserService } from '../../services/user.service';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserMockService } from '../../mocks/user-mock.service.mock';

describe('UserService', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      /**
       * Here, when the service "UserService" is injected it should use the "UserServiceMock" instead.
       * The "UserServiceMock" is a dummy service that we created that returns dummy data to run the tests of the component.
       */
      providers: [
        { provide: UserService, useClass: UserMockService }
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

  it('should have one user', async() => {
    expect(component.users.length).toEqual(1);
  });

  it('should be created', () => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('user mock');
  });


});
