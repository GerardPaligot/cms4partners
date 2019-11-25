import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WorkflowComponent } from './workflow/workflow.component';
import { FaqComponent } from './faq/faq.component';
import { InfoComponent } from './info/info.component';
import { LoaderComponent } from './loader/loader.component';
import { BrowserModule } from '@angular/platform-browser';
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
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { PartnerComponent } from './partner/partner.component';
import { MatCardModule } from '@angular/material/card';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AdminValidatedComponent } from './step/admin/validated/validated.component';
import { AdminSignedComponent } from './step/admin/signed/signed.component';
import { SignedComponent } from './step/signed/signed.component';
import { AdminPaidComponent } from './step/admin/paid/paid.component';
import { PanelItemComponent } from './panel-item/panel-item.component';
import { FilesComponent } from './files/files.component';
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
    imports: [
        MatIconModule,
        MatTabsModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatExpansionModule,
        MatCardModule,
        AngularFireAuthModule,
        MatListModule,
        MatToolbarModule
    ],
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
