import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
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
        AdminValidatedComponent
    ],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [FormComponent, LoaderComponent],
    entryComponents: [DefaultComponent, ValidatedComponent, PaidComponent, AdminValidatedComponent]
})
export class CommonPartnersModule {}
