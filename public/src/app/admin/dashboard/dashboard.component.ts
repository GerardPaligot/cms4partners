import { Component, OnInit } from '@angular/core';
import { PartnerService, Company } from 'src/app/common/partner.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    displayedColumns: string[] = ['name', 'sponsoring', 'action'];
    partners: Company[];
    summary: { esnOK?: number; esnKO?: number; otherOK?: number; otherKO?: number; total?: number } = {};
    constructor(private partnerService: PartnerService) {
        this.partnerService.getAll().subscribe(partners => {
            this.partners = partners;
        });
    }

    ngOnInit() {}
}
