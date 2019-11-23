import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonPartnersModule } from '../common/common.module';
import { MatTabsModule } from '@angular/material/tabs';
import { PartnerComponent } from '../common/partner/partner.component';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    {
        path: 'partner/:id',
        component: PartnerComponent
    }
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [MatTableModule, MatTabsModule, CommonModule, CommonPartnersModule, RouterModule.forChild(routes)],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AdminModule {}
