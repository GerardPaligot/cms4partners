import { Component, OnInit } from '@angular/core';
import { Company, PartnerService } from 'src/app/common/partner.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PartnerStore } from 'src/app/partner/partner.store';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
    partner$: Observable<Company>;
    isLoading: boolean;
    constructor(private partnerService: PartnerService, private route: ActivatedRoute, private partnerStore: PartnerStore) {
        this.partner$ = this.partnerService.get(route.snapshot.paramMap.get('id'));
        this.isLoading = true;
    }

    ngOnInit() {
        this.partnerService.get(this.route.snapshot.paramMap.get('id')).subscribe((partner: Company) => {
            console.log(partner);
            this.partnerStore.broadcastPartner(partner);
            this.isLoading = false;
        });
    }

    onSubmit(company: Company) {}

    validate() {
        // this.partnerService.update(this.route.snapshot.paramMap.get('id'), {
        //     status: {
        //         validated: true
        //     }
        // });
    }
}
