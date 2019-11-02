import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkflowComponent } from './workflow/workflow.component';
import { FaqComponent } from './faq/faq.component';
import { InfoComponent } from './info/info.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    declarations: [FormComponent, WorkflowComponent, FaqComponent, InfoComponent, LoaderComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [FormComponent, LoaderComponent]
})
export class CommonPartnersModule {}
