import { Component, OnInit } from '@angular/core';
import { Company, PartnerService } from 'src/app/common/partner.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent {
    success = false;
    constructor(private partnerService: PartnerService, private router: Router) {}

    onSubmit(company: Company) {
        this.partnerService.add(company).then(data => {
            this.router.navigate(['/dashboard', data.id]);
        });
    }
}
