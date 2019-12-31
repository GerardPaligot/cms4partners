import { Component, OnInit, Input } from '@angular/core';
import { Workflow, WorkflowStep, State } from 'src/app/common/workflow/workflow.service';
import { PartnerService } from 'src/app/common/partner.service';
import { Company } from 'src/app/common/Company';

@Component({
    selector: 'app-admin-validated',
    templateUrl: './validated.component.html',
    styleUrls: ['./validated.component.scss']
})
export class AdminValidatedComponent implements OnInit {
    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    @Input() id: string;
    files = {};
    choice = '';

    constructor(private partnerService: PartnerService) {}

    ngOnInit() {
        this.files = {
            Convention: this.company.conventionUrl,
            'Facture Proforma': this.company.devisUrl
        };
        this.choice = this.company.sponsoring;
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
    updateSponsoring() {
        this.partnerService.update(this.id, {
            sponsoring: this.choice,
            secondSponsoring: this.choice === this.company.sponsoring ? this.company.secondSponsoring : this.company.sponsoring
        });
    }
    uploadConvention(file) {
        this.partnerService.uploadFile(this.id, file, 'conventionUrl', 'convention');
    }
    uploadDevis(file) {
        this.partnerService.uploadFile(this.id, file, 'devisUrl', 'devis');
    }
}
