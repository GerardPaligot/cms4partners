import { Component, OnInit } from '@angular/core';
import { Company, PartnerService } from 'src/app/common/partner.service';
import { DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    constructor(private partnerService: PartnerService, private router: Router) {}

    ngOnInit() {}

    onSubmit(company: Company) {
        this.partnerService.add(company).then((documentReference: DocumentReference) => {
            this.router.navigate(['/partner', documentReference.id]);
        });
    }
}
