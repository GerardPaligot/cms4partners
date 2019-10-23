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
export class WorkflowComponent {
    partner$: Observable<Company>;
    partnerNotValidated$: Observable<boolean>;

    constructor(private partnerService: PartnerService, private route: ActivatedRoute) {
        this.createObservable();
    }

    createObservable() {
        this.partner$ = this.partnerService.get(this.route.parent.snapshot.paramMap.get('id'));
        this.partnerNotValidated$ = this.partner$.pipe(
            map(partner => {
                return !(partner.status && partner.status.validated);
            })
        );
    }

    validate() {
        this.partnerService
            .update(this.route.parent.snapshot.paramMap.get('id'), {
                status: {
                    validated: true
                }
            })
            .then(() => {
                this.createObservable();
            });
    }
}
