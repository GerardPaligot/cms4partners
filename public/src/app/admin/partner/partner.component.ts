import { Component, OnInit } from '@angular/core';
import { Company, PartnerService } from 'src/app/common/partner.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
    partner$: Observable<Company>;
    partnerValidated$: Observable<boolean>;

    constructor(private partnerService: PartnerService, private route: ActivatedRoute) {
        this.partner$ = this.partnerService.get(route.snapshot.paramMap.get('id'));
        this.partnerValidated$ = this.partner$.pipe(map(partner => partner.validated));
    }

    ngOnInit() {}

    onSubmit(company: Company) {}

    validate() {
        this.partnerService.update(this.route.snapshot.paramMap.get('id'), { validated: true });
    }
}
