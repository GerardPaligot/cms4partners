import { Component, OnInit, Input } from '@angular/core';
import { Company, PartnerService } from 'src/app/common/partner.service';

@Component({
    selector: 'app-filled',
    templateUrl: './filled.component.html',
    styleUrls: ['./filled.component.scss']
})
export class FilledComponent implements OnInit {
    @Input() company: Company;
    @Input() id: string;
    constructor(private partnerService: PartnerService) {}

    ngOnInit() {}
    update() {
        this.partnerService.update(this.id, {
            type: this.company.type
        });
    }
}
