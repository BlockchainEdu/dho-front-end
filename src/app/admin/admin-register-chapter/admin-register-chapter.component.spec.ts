import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterChapterComponent } from './admin-register-chapter.component';

describe('AdminRegisterChapterComponent', () => {
  let component: AdminRegisterChapterComponent;
  let fixture: ComponentFixture<AdminRegisterChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegisterChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
