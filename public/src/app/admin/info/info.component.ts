import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, PartnerService } from 'src/app/common/partner.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
    partner$: Observable<Company>;
    id: string;

    constructor(private partnerService: PartnerService, private route: ActivatedRoute) {
        this.id = route.parent.snapshot.paramMap.get('id');

        this.partner$ = this.partnerService.get(this.id);
    }

    ngOnInit() {}

    onSubmit(company: Company) {
        this.partnerService.update(this.id, company);
    }
}
