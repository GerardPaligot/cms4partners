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
import { AdminSocialComponent } from '../step/admin/social/social.component';
import { CommunicatedComponent } from '../step/communicated/communicated.component';
import { SignedComponent } from '../step/signed/signed.component';
import { AdminFilledComponent } from '../step/admin/filled/filled.component';
import { AdminValidatedComponent } from '../step/admin/validated/validated.component';
import { AdminSignedComponent } from '../step/admin/signed/signed.component';
import { AdminPaidComponent } from '../step/admin/paid/paid.component';
import { AdminCommunicatedComponent } from '../step/admin/communicated/communicated.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { WorkflowStep } from '../workflow/workflow.service';
import { Company } from '../Company';
import { FilledComponent } from '../step/filled/filled.component';

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
        filled: FilledComponent,
        validated: ValidatedComponent,
        paid: PaidComponent,
        received: AdminSocialComponent,
        communicated: CommunicatedComponent,
        sign: SignedComponent
    };

    adminCOmponent = {
        filled: AdminFilledComponent,
        validated: AdminValidatedComponent,
        sign: AdminSignedComponent,
        paid: AdminPaidComponent,
        received: AdminSocialComponent,
        communicated: AdminCommunicatedComponent
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
