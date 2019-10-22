import { NgModule } from '@angular/core';
import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonPartnersModule } from '../common/common.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CreateComponent },
  { path: 'dashboard/:id', component: DashboardComponent }
];

@NgModule({
  declarations: [CreateComponent, DashboardComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],

  imports: [CommonModule, CommonPartnersModule, RouterModule.forChild(routes)]
})
export class PartnerModule {}
