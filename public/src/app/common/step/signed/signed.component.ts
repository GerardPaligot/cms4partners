import { Component, OnInit, Input } from '@angular/core';
import { Workflow, WorkflowStep, State } from '../../workflow/workflow.service';
import { PartnerService } from '../../partner.service';
import { Company } from '../../Company';

@Component({
    selector: 'app-signed',
    templateUrl: './signed.component.html',
    styleUrls: ['./signed.component.scss']
})
export class SignedComponent implements OnInit {
    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    @Input() id: string;
    files = {};
    constructor(private partnerService: PartnerService) {}

    ngOnInit() {
        this.files = {
            'Convention signée': this.company.conventionSignedUrl
        };
    }
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
    uploadConvention(event) {
        this.partnerService.uploadFile(this.id, event.target.files[0], 'conventionSignedUrl', 'signed');
    }
}
