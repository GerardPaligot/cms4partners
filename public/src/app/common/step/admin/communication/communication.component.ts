import { Component, OnInit, Input } from '@angular/core';
import { Workflow, WorkflowStep } from 'src/app/common/workflow/workflow.service';
import { Company, PartnerService } from 'src/app/common/partner.service';

@Component({
    selector: 'app-communication',
    templateUrl: './communication.component.html',
    styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    @Input() id: string;

    constructor(private partnerService: PartnerService) {}

    ngOnInit() {}
    setDate() {
        this.partnerService.update(this.id, {
            publicationDate: this.company.publicationDate
        });
    }
}
