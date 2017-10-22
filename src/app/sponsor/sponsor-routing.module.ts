import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorHomeComponent } from './sponsor-home/sponsor-home.component' ;
import { SponsorPurchaseComponent } from './sponsor-purchase/sponsor-purchase.component' ;
import { SponsorWithdrawComponent } from './sponsor-withdraw/sponsor-withdraw.component' ;
import { SponsorDonateComponent } from './sponsor-donate/sponsor-donate.component' ;

const routes: Routes = [
  {
    path: '',
    component: SponsorHomeComponent
  },
  {
    path: 'buy',
    component: SponsorPurchaseComponent
  },
  {
    path: 'withdraw',
    component: SponsorWithdrawComponent
  },
  {
    path: 'donate',
    component: SponsorDonateComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorRoutingModule { }
