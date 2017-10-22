import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminMembersComponent } from './admin-admin-members.component';

describe('AdminAdminMembersComponent', () => {
  let component: AdminAdminMembersComponent;
  let fixture: ComponentFixture<AdminAdminMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdminMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdminMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
