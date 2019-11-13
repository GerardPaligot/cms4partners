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
import { MainComponent } from './step/main/main.component';
import { ValidatedComponent } from './step/validated/validated.component';
import { PaidComponent } from './step/paid/paid.component';
import { AdminValidatedComponent } from './step/admin/validated/validated.component';
import { FilledComponent as PublicFilledComponent } from './step/filled/filled.component';
import { FilledComponent } from './step/admin/filled/filled.component';

import { SocialComponent } from './step/admin/social/social.component';
import { CommunicationComponent } from './step/admin/communication/communication.component';
import { CommunicatedComponent } from './step/communicated/communicated.component';
import { AddPipe } from './add.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { PartnerComponent } from './partner/partner.component';
import { MatCardModule } from '@angular/material/card';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
    declarations: [
        FormComponent,
        WorkflowComponent,
        FaqComponent,
        InfoComponent,
        LoaderComponent,
        DefaultComponent,
        MainComponent,
        ValidatedComponent,
        PaidComponent,
        AdminValidatedComponent,
        FilledComponent,
        SocialComponent,
        CommunicationComponent,
        CommunicatedComponent,
        AddPipe,
        PublicFilledComponent,
        PartnerComponent
    ],
    imports: [
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
        AngularFireAuthModule
    ],
    exports: [FormComponent, LoaderComponent, WorkflowComponent, InfoComponent],
    entryComponents: [
        FilledComponent,
        CommunicatedComponent,
        CommunicationComponent,
        SocialComponent,
        DefaultComponent,
        ValidatedComponent,
        PaidComponent,
        AdminValidatedComponent,
        PublicFilledComponent
    ]
})
export class CommonPartnersModule {}
