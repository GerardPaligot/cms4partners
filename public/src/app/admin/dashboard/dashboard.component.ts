import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/common/partner.service';
import { Company } from 'src/app/common/Company';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    displayedColumns: string[] = ['name', 'sponsoring', 'action'];
    partners: Company[];
    constructor(private partnerService: PartnerService) {
        this.partnerService.getAll().subscribe(partners => {
            this.partners = partners;
        });
    }
}
