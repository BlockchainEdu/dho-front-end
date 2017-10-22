import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterRoleComponent } from './admin-register-role.component';

describe('AdminRegisterRoleComponent', () => {
  let component: AdminRegisterRoleComponent;
  let fixture: ComponentFixture<AdminRegisterRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegisterRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
