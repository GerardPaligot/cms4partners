import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkflowStep, WorkflowService, Workflow } from './workflow.service';
import { PartnerStore } from 'src/app/partner/partner.store';
import { Company } from '../partner.service';
import { tap, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-workflow',
    templateUrl: './workflow.component.html',
    styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
    public id: string;
    public workflow: Workflow;
    public partner: Company;
    public isLoading = true;

    constructor(private route: ActivatedRoute, private workflowService: WorkflowService, private partnerStore: PartnerStore) {}

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');

        this.workflowService
            .getAll()
            .pipe(
                tap(workflow => (this.workflow = workflow[0])),
                switchMap(() => {
                    return this.partnerStore.partner$;
                })
            )
            .subscribe(partner => {
                this.partner = partner;
                this.applyWorkflow(this.workflow);
            });
    }

    applyWorkflow(workflow: Workflow) {
        workflow.steps = workflow.steps.map((step: WorkflowStep) => {
            switch (this.partner.status[step.key]) {
                case 'done':
                    step.state = 'done';
                    step.class = 'is-primary';
                    break;

                case 'pending':
                    step.state = 'pending';
                    step.class = 'is-secondary';
                    break;

                case 'disabled':
                    step.state = 'disabled';
                    step.class = 'is-danger';
                    break;

                default:
                    step.state = 'disabled';
                    step.class = 'is-secondary';
                    break;
            }
            return step;
        });

        this.workflow = workflow;
        this.isLoading = false;
    }
}
