import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorDonateComponent } from './sponsor-donate.component';

describe('SponsorDonateComponent', () => {
  let component: SponsorDonateComponent;
  let fixture: ComponentFixture<SponsorDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
