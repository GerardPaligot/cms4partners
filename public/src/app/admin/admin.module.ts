import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerComponent } from './partner/partner.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonPartnersModule } from '../common/common.module';
import { WorkflowComponent } from './workflow/workflow.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    {
        path: 'partner/:id',
        component: PartnerComponent,
        children: [
            { path: 'workflow', component: WorkflowComponent },
            { path: 'infos', component: InfoComponent },
            { path: '**', redirectTo: 'workflow' }
        ]
    }
];

@NgModule({
    declarations: [DashboardComponent, PartnerComponent, WorkflowComponent, InfoComponent],
    imports: [CommonModule, CommonPartnersModule, RouterModule.forChild(routes)],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AdminModule {}
