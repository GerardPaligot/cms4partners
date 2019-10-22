import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, PartnerService } from '../partner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
    partner$: Observable<Company>;
    id: string;
    constructor(private partnerService: PartnerService, route: ActivatedRoute) {
        this.id = route.parent.snapshot.paramMap.get('id');
        this.partner$ = this.partnerService.get(this.id);
    }

    ngOnInit() {}

    onSubmit(company: Company) {}
}
