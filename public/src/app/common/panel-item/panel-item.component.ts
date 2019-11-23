import {
    Component,
    OnInit,
    ViewChild,
    ViewContainerRef,
    AfterViewInit,
    OnChanges,
    SimpleChanges,
    ComponentFactoryResolver,
    Input
} from '@angular/core';
import { DefaultComponent } from '../step/default/default.component';
import { ValidatedComponent } from '../step/validated/validated.component';
import { PaidComponent } from '../step/paid/paid.component';
import { SocialComponent } from '../step/admin/social/social.component';
import { CommunicatedComponent } from '../step/communicated/communicated.component';
import { SignedComponent } from '../step/signed/signed.component';
import { FilledComponent } from '../step/admin/filled/filled.component';
import { AdminValidationComponent } from '../step/admin/validation/validation.component';
import { AdminSignedComponent } from '../step/admin/signed/signed.component';
import { AdminPaidComponent } from '../step/admin/paid/paid.component';
import { CommunicationComponent } from '../step/admin/communication/communication.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { WorkflowStep } from '../workflow/workflow.service';
import { Company } from '../Company';

@Component({
    selector: 'app-panel-item',
    templateUrl: './panel-item.component.html',
    styleUrls: ['./panel-item.component.scss']
})
export class PanelItemComponent implements AfterViewInit, OnChanges {
    @Input() step: WorkflowStep;
    @Input() company: Company;
    @Input() id: string;

    publicComponents = {
        filled: DefaultComponent,
        validated: ValidatedComponent,
        paid: PaidComponent,
        received: SocialComponent,
        communicated: CommunicatedComponent,
        sign: SignedComponent
    };

    adminCOmponent = {
        filled: FilledComponent,
        validated: AdminValidationComponent,
        sign: AdminSignedComponent,
        paid: AdminPaidComponent,
        received: SocialComponent,
        communicated: CommunicationComponent
    };

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
