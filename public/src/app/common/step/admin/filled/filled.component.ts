import { Component, OnInit, Input } from '@angular/core';
import { PartnerService } from 'src/app/common/partner.service';
import { Company } from 'src/app/common/Company';
import { WorkflowStep } from 'src/app/common/workflow/workflow.service';

@Component({
    selector: 'app-admin-filled',
    templateUrl: './filled.component.html',
    styleUrls: ['./filled.component.scss']
})
export class AdminFilledComponent implements OnInit {
    @Input() company: Company;
    @Input() id: string;
    @Input() step: WorkflowStep;

    constructor(private partnerService: PartnerService) {}

    ngOnInit() {}
    update() {
        this.partnerService.update(this.id, {
            type: this.company.type
        });
    }
}
