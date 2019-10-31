import { Component, OnInit } from '@angular/core';
import { Company, PartnerService, WorkflowStatus } from '../partner.service';
import { ActivatedRoute } from '@angular/router';
import { WorkflowStep, WorkflowService, Workflow } from './workflow.service';
import { map, flatMap } from 'rxjs/operators';

@Component({
    selector: 'app-workflow',
    templateUrl: './workflow.component.html',
    styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
    public id: string;
    public workflow: Workflow;

    constructor(private partnerService: PartnerService, route: ActivatedRoute, private workflowService: WorkflowService) {
        this.id = route.parent.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.workflowService
            .getAll()
            .pipe(
                map(workflows => {
                    this.workflow = workflows[0];
                }),
                flatMap(() => this.partnerService.get(this.id))
            )
            .subscribe((partner: Company) => {
                console.log(partner);
                // if (partner.status.isFilled) {
                //     this.steps[0].state = 'done';
                //     this.steps[0].class = 'is-primary';
                // }
                // if (partner.status.isValidated) {
                // }
                // if (partner.status.isSign) {
                // }
                // if (partner.status.isPaid) {
                // }
                // if (partner.status.isCommunicated) {
                // }
            });
    }
}
