import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, PartnerService } from 'src/app/common/partner.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-workflow',
    templateUrl: './workflow.component.html',
    styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
    partner$: Observable<Company>;
    partnerValidated$: Observable<boolean>;

    constructor(private partnerService: PartnerService, private route: ActivatedRoute) {
        this.partner$ = this.partnerService.get(route.parent.snapshot.paramMap.get('id'));
        this.partnerValidated$ = this.partner$.pipe(map(partner => partner.validated));
    }

    ngOnInit() {}

    validate() {
        this.partnerService.update(this.route.snapshot.paramMap.get('id'), { validated: true });
    }
}
