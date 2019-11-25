import { Component, OnInit, Input } from '@angular/core';
import { Workflow, WorkflowStep } from 'src/app/common/workflow/workflow.service';
import { PartnerService } from 'src/app/common/partner.service';
import { Company } from 'src/app/common/Company';

@Component({
    selector: 'app-admin-communicated',
    templateUrl: './communicated.component.html',
    styleUrls: ['./communicated.component.scss']
})
export class AdminCommunicatedComponent implements OnInit {
    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    @Input() id: string;
    files = {};

    constructor(private partnerService: PartnerService) {}

    setDate() {
        this.partnerService.update(this.id, {
            publicationDate: this.company.publicationDate
        });
    }
    uploadFlyer(event) {
        this.partnerService.uploadFile(this.id, event.target.files[0], 'flyerUrl', 'flyers');
    }

    ngOnInit() {
        this.files = {
            Flyer: this.company.flyerUrl
        };
    }
}
