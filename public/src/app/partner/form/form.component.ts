import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/common/partner.service';
import { Company } from 'src/app/common/Company';

@Component({
    selector: 'app-new-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    submitted = false;
    constructor(private partnerservice: PartnerService) {}
    ngOnInit() {}
    createPartner(company: Company) {
        this.partnerservice
            .add({
                ...company
            })
            .then(() => {
                this.submitted = true;
            });
    }
}
