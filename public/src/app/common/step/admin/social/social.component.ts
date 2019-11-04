import { Component, OnInit, Input } from '@angular/core';
import { Company, PartnerService } from 'src/app/common/partner.service';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
    @Input() company: Company;
    @Input() id: string;
    constructor(private partnerService: PartnerService) {}

    ngOnInit() {}
    update() {
        this.partnerService.update(this.id, {
            twitter: this.company.twitter || '',
            facebook: this.company.facebook || '',
            linkedin: this.company.linkedin || ''
        });
    }
}
