import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, PartnerService } from 'src/app/common/partner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {}

    onSubmit(company: Company) {}
}
