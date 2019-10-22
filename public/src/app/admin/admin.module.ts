import { NgModule } from '@angular/core';
import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerComponent } from './partner/partner.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonPartnersModule } from '../common/common.module';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'partner/:id', component: PartnerComponent }
];

@NgModule({
  declarations: [DashboardComponent, PartnerComponent],
  imports: [CommonModule, CommonPartnersModule, RouterModule.forChild(routes)],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AdminModule {}
