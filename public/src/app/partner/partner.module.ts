import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonPartnersModule } from '../common/common.module';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from '../common/faq/faq.component';
import { InfoComponent } from '../common/info/info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PartnerComponent } from './partner.component';
import { WorkflowComponent } from '../common/workflow/workflow.component';

const routes: Routes = [
    { path: '', component: CreateComponent },
    {
        path: 'partner/:id',
        component: PartnerComponent,
        children: [
            { path: 'workflow', component: WorkflowComponent },
            { path: 'faq', component: FaqComponent },
            { path: 'infos', component: InfoComponent },
            { path: 'dashboard', component: DashboardComponent }
        ]
    }
];

@NgModule({
    declarations: [CreateComponent, DashboardComponent, NavigationComponent, PartnerComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],

    imports: [CommonModule, CommonPartnersModule, RouterModule.forChild(routes)]
})
export class PartnerModule {}
