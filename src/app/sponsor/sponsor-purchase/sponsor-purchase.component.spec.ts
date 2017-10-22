import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorPurchaseComponent } from './sponsor-purchase.component';

describe('SponsorPurchaseComponent', () => {
  let component: SponsorPurchaseComponent;
  let fixture: ComponentFixture<SponsorPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
