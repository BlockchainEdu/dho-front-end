import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorWithdrawComponent } from './sponsor-withdraw.component';

describe('SponsorWithdrawComponent', () => {
  let component: SponsorWithdrawComponent;
  let fixture: ComponentFixture<SponsorWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
