import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorRoutingModule } from './sponsor-routing.module';
import { SponsorHomeComponent } from './sponsor-home/sponsor-home.component';
import { SponsorPurchaseComponent } from './sponsor-purchase/sponsor-purchase.component';
import { SponsorWithdrawComponent } from './sponsor-withdraw/sponsor-withdraw.component';
import { SponsorDonateComponent } from './sponsor-donate/sponsor-donate.component';

@NgModule({
  imports: [
    CommonModule,
    SponsorRoutingModule
  ],
  declarations: [SponsorHomeComponent, SponsorPurchaseComponent, SponsorWithdrawComponent, SponsorDonateComponent]
})
export class SponsorModule { }
