import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WorkflowComponent } from './workflow/workflow.component';
import { FaqComponent } from './faq/faq.component';
import { InfoComponent } from './info/info.component';
import { LoaderComponent } from './loader/loader.component';
import { DefaultComponent } from './step/default/default.component';
import { ValidatedComponent } from './step/validated/validated.component';
import { PaidComponent } from './step/paid/paid.component';
import { AdminDefaultComponent } from './step/admin/default/default.component';
import { FilledComponent as PublicFilledComponent } from './step/filled/filled.component';
import { AdminFilledComponent } from './step/admin/filled/filled.component';

import { AdminSocialComponent } from './step/admin/social/social.component';
import { AdminCommunicatedComponent } from './step/admin/communicated/communicated.component';
import { CommunicatedComponent } from './step/communicated/communicated.component';
import { AddPipe } from './add.pipe';

import { PartnerComponent } from './partner/partner.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AdminValidatedComponent } from './step/admin/validated/validated.component';
import { AdminSignedComponent } from './step/admin/signed/signed.component';
import { SignedComponent } from './step/signed/signed.component';
import { AdminPaidComponent } from './step/admin/paid/paid.component';
import { PanelItemComponent } from './panel-item/panel-item.component';
import { FilesComponent } from './files/files.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
@NgModule({
    declarations: [
        FormComponent,
        WorkflowComponent,
        FaqComponent,
        InfoComponent,
        LoaderComponent,
        DefaultComponent,
        ValidatedComponent,
        PaidComponent,
        AdminDefaultComponent,
        AdminFilledComponent,
        AdminSocialComponent,
        AdminCommunicatedComponent,
        CommunicatedComponent,
        AddPipe,
        PublicFilledComponent,
        PartnerComponent,
        AdminValidatedComponent,
        AdminSignedComponent,
        SignedComponent,
        AdminPaidComponent,
        PanelItemComponent,
        FilesComponent
    ],
    imports: [MaterialModule, CommonModule, ReactiveFormsModule, FormsModule, AngularFireAuthModule, RouterModule],
    exports: [FormComponent, LoaderComponent, WorkflowComponent, InfoComponent],
    entryComponents: [
        AdminPaidComponent,
        SignedComponent,
        AdminSignedComponent,
        AdminValidatedComponent,
        AdminFilledComponent,
        CommunicatedComponent,
        AdminCommunicatedComponent,
        AdminSocialComponent,
        DefaultComponent,
        ValidatedComponent,
        PaidComponent,
        AdminDefaultComponent,
        PublicFilledComponent
    ]
})
export class CommonPartnersModule {}
