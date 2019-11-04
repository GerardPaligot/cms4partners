import { Component, OnInit } from '@angular/core';
import { PartnerService, Company } from 'src/app/common/partner.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    partners: Company[];
    summary: { esnOK: number; esnKO: number; otherOK: number; otherKO: number; total: number };
    constructor(private partnerService: PartnerService) {
        this.partnerService.getAll().subscribe(partners => {
            this.partners = partners;
            this.summary = {
                esnOK: this.partners.filter(p => p.type === 'esn' && p.status.validated).length,
                esnKO: this.partners.filter(p => p.type === 'esn' && !p.status.validated).length,
                otherOK: this.partners.filter(p => p.type === 'other' && p.status.validated).length,
                otherKO: this.partners.filter(p => p.type === 'other' && !p.status.validated).length,
                total: this.partners.length
            };
        });
    }

    ngOnInit() {}
}
