import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegisterPlanComponent } from './account-register-plan.component';

describe('AccountRegisterPlanComponent', () => {
  let component: AccountRegisterPlanComponent;
  let fixture: ComponentFixture<AccountRegisterPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRegisterPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRegisterPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
