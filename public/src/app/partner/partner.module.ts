import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonPartnersModule } from '../common/common.module';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowComponent } from '../common/workflow/workflow.component';
import { FaqComponent } from '../common/faq/faq.component';
import { InfoComponent } from '../common/info/info.component';

const routes: Routes = [
    { path: '', component: CreateComponent },
    {
        path: 'dashboard/:id',
        component: DashboardComponent,
        children: [
            { path: 'workflow', component: WorkflowComponent },
            { path: 'faq', component: FaqComponent },
            { path: 'infos', component: InfoComponent },
            { path: '**', redirectTo: 'workflow' }
        ]
    }
];

@NgModule({
    declarations: [CreateComponent, DashboardComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],

    imports: [CommonModule, CommonPartnersModule, RouterModule.forChild(routes)]
})
export class PartnerModule {}
