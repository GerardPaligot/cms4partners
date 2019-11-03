import { Component, OnInit, Input } from '@angular/core';
import { PartnerService, Company } from 'src/app/common/partner.service';
import { Workflow, WorkflowStep, State } from 'src/app/common/workflow/workflow.service';

@Component({
    selector: 'app-validated',
    templateUrl: './validated.component.html',
    styleUrls: ['./validated.component.scss']
})
export class AdminValidatedComponent implements OnInit {
    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    @Input() id: string;
    constructor(private partnerService: PartnerService) {}

    ngOnInit() {}

    updateStatus(status: State) {
        this.partnerService.update(this.id, {
            status: {
                ...this.company.status,
                [this.step.key]: status
            }
        });
    }
    setPending() {
        this.updateStatus('pending');
    }
    setDone() {
        this.updateStatus('done');
    }
}
