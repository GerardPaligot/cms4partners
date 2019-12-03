import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/common/partner.service';
import { Company } from 'src/app/common/Company';

const sortByName = (a: Company, b: Company) => a.name.localeCompare(b.name);
const sortByDate = (a: Company, b: Company) => a.creationDate.toMillis() - b.creationDate.toMillis();

enum SortBy {
    NAME,
    DATE
}
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    displayedColumns: string[] = ['name', 'sponsoring', 'action'];
    partners: Company[];
    originalPartners: Company[];

    numberOther = 0;
    numberESN = 0;
    sortByValues: string[] = ['name', 'date'];

    sortBy = this.sortByValues[0];

    constructor(private partnerService: PartnerService) {
        this.partnerService.getAll().subscribe(partners => {
            this.originalPartners = partners;

            partners.forEach(partner => {
                if (partner.type === 'esn') {
                    this.numberESN++;
                } else {
                    this.numberOther++;
                }
            });
            this.sortByChange(this.sortByValues[0]);
        });
    }

    sortByChange(sortBy: string) {
        this.sortBy = sortBy;
        this.partners = [...this.originalPartners.sort(this.sortBy === 'name' ? sortByName : sortByDate)];
    }
}
