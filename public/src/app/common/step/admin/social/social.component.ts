import { Component, OnInit, Input } from '@angular/core';
import { PartnerService } from 'src/app/common/partner.service';
import { Company } from 'src/app/common/Company';
import { WorkflowStep } from 'src/app/common/workflow/workflow.service';

@Component({
    selector: 'app-admin-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss']
})
export class AdminSocialComponent implements OnInit {
    @Input() company: Company;
    @Input() id: string;
    @Input() step: WorkflowStep;
    files = {};
    constructor(private partnerService: PartnerService) {}

    ngOnInit() {
        this.files = {
            Logo: this.company.logoUrl
        };
    }
    update() {
        this.partnerService.update(this.id, {
            twitter: this.company.twitter || '',
            facebook: this.company.facebook || '',
            linkedin: this.company.linkedin || ''
        });
    }
    upload(event) {
        event.preventDefault();
        this.partnerService.uploadFile(this.id, event.target.files[0]);
    }
}
