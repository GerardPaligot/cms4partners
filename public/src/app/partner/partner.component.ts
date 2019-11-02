import { Component, OnInit } from '@angular/core';
import { PartnerStore } from './partner.store';
import { PartnerService, Company } from '../common/partner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
    public partner: Company;
    public isLoading: boolean;
    private id: string;

    constructor(private partnerService: PartnerService, route: ActivatedRoute, private partnerStore: PartnerStore) {
        this.id = route.snapshot.paramMap.get('id');
        this.isLoading = true;
    }

    ngOnInit() {
        this.partnerService.get(this.id).subscribe((partner: Company) => {
            this.partner = partner;
            this.partnerStore.broadcastPartner(partner);
            this.isLoading = false;
        });
    }
}
