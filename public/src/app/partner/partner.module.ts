import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CommonPartnersModule } from '../common/common.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { PartnerComponent } from '../common/partner/partner.component';
import { FormComponent } from '../common/form/form.component';

const routes: Routes = [
    { path: '', component: FormComponent },
    {
        path: 'partner/:id',
        component: PartnerComponent
    }
];

@NgModule({
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],

    imports: [MatTabsModule, MatCardModule, CommonModule, CommonPartnersModule, RouterModule.forChild(routes)]
})
export class PartnerModule {}
