import { Component, OnInit, Input } from '@angular/core';
import { Workflow, WorkflowStep, State } from 'src/app/common/workflow/workflow.service';
import { PartnerService } from 'src/app/common/partner.service';
import { Company } from 'src/app/common/Company';

@Component({
    selector: 'app-admin-paid',
    templateUrl: './paid.component.html',
    styleUrls: ['./paid.component.scss']
})
export class AdminPaidComponent implements OnInit {
    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    @Input() id: string;
    files = {};
    constructor(private partnerService: PartnerService) {}

    ngOnInit() {
        this.files = {
            Facture: this.company.invoiceUrl
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
    uploadInvoice(file) {
        this.partnerService.uploadFile(this.id, file, 'invoiceUrl', 'facture');
    }
}
