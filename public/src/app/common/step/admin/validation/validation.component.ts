import { Component, OnInit, Input } from '@angular/core';
import { Workflow, WorkflowStep, State } from 'src/app/common/workflow/workflow.service';
import { PartnerService } from 'src/app/common/partner.service';
import { Company } from 'src/app/common/Company';

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.scss']
})
export class AdminValidationComponent implements OnInit {
    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    @Input() id: string;
    files = {};
    constructor(private partnerService: PartnerService) {}

    ngOnInit() {
        this.files = {
            Convention: this.company.conventionUrl,
            Devis: this.company.devisUrl
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
        this.partnerService.uploadFile(this.id, event.target.files[0], 'conventionUrl', 'convention');
    }
    uploadDevis(event) {
        this.partnerService.uploadFile(this.id, event.target.files[0], 'devisUrl', 'devis');
    }
}
