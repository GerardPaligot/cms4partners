import { Component, AfterViewInit, OnInit, Input, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Workflow, WorkflowStep } from '../../workflow/workflow.service';
import { DefaultComponent } from '../default/default.component';
import { ValidatedComponent } from '../validated/validated.component';
import { PaidComponent } from '../paid/paid.component';
import { Company } from '../../partner.service';
import { AdminValidatedComponent } from '../admin/validated/validated.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { FilledComponent } from '../admin/filled/filled.component';

@Component({
    selector: 'app-main-step',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
    publicComponents = {
        validated: ValidatedComponent,
        paid: PaidComponent
    };

    adminCOmponent = {
        filled: FilledComponent,
        validated: AdminValidatedComponent,
        paid: AdminValidatedComponent
    };

    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    @Input() id: string;

    @ViewChild('content', { read: ViewContainerRef, static: false })
    public content: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private aauth: AngularFireAuth) {}

    ngAfterViewInit(): void {
        const components = this.aauth.auth.currentUser.email.endsWith('@gdglille.org') ? this.adminCOmponent : this.publicComponents;
        this.content.clear();
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(components[this.step.key] || DefaultComponent);
        const component = this.content.createComponent(componentFactory);
        (component.instance as any).step = this.step;
        (component.instance as any).company = this.company;
        (component.instance as any).id = this.id;

        component.changeDetectorRef.detectChanges();
    }
}
