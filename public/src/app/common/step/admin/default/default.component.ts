import { Component, OnInit, Input } from '@angular/core';
import { PartnerService } from 'src/app/common/partner.service';
import { Company } from 'src/app/common/Company';
import { Workflow, WorkflowStep, State } from 'src/app/common/workflow/workflow.service';

@Component({
    selector: 'app-admin-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class AdminDefaultComponent implements OnInit {
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
