import {
    Component,
    AfterViewInit,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    ComponentFactoryResolver,
    ViewContainerRef,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { Workflow, WorkflowStep } from '../../workflow/workflow.service';
import { DefaultComponent } from '../default/default.component';
import { ValidatedComponent } from '../validated/validated.component';
import { PaidComponent } from '../paid/paid.component';
import { Company } from '../../partner.service';
import { AdminValidatedComponent } from '../admin/validated/validated.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { FilledComponent } from '../admin/filled/filled.component';
import { SocialComponent } from '../admin/social/social.component';
import { CommunicationComponent } from '../admin/communication/communication.component';
import { CommunicatedComponent } from '../communicated/communicated.component';

@Component({
    selector: 'app-main-step',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit, OnChanges {
    publicComponents = {
        filled: DefaultComponent,
        validated: ValidatedComponent,
        paid: PaidComponent,
        received: SocialComponent,
        communicated: CommunicatedComponent
    };

    adminCOmponent = {
        filled: FilledComponent,
        validated: AdminValidatedComponent,
        sign: AdminValidatedComponent,
        paid: AdminValidatedComponent,
        received: SocialComponent,
        communicated: CommunicationComponent
    };

    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    @Input() id: string;

    @ViewChild('content', { read: ViewContainerRef, static: false })
    public content: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private aauth: AngularFireAuth) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.company && changes.company) {
            this.createComponent();
        }
    }

    private createComponent() {
        try {
            const components =
                this.aauth.auth.currentUser && this.aauth.auth.currentUser.email.endsWith('@gdglille.org')
                    ? this.adminCOmponent
                    : this.publicComponents;
            this.content.clear();
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(components[this.step.key] || DefaultComponent);
            const component = this.content.createComponent(componentFactory);
            (component.instance as any).step = this.step;
            (component.instance as any).company = this.company;
            (component.instance as any).id = this.id;

            component.changeDetectorRef.detectChanges();
        } catch (e) {}
    }

    ngAfterViewInit(): void {
        this.createComponent();
    }
}
