import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/common/partner.service';
import { Company } from 'src/app/common/Company';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PartnerStore } from 'src/app/partner/partner.store';
import { startWith, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
    partner$: Observable<Company>;
    isLoading: boolean;
    isAdmin = false;
    partner: Company;
    constructor(
        private partnerService: PartnerService,
        private route: ActivatedRoute,
        private partnerStore: PartnerStore,
        private aauth: AngularFireAuth
    ) {
        aauth.user.subscribe(user => {
            this.isAdmin = user.email.endsWith('@gdglille.org');
        });
        this.isLoading = true;
    }

    ngOnInit() {
        this.partnerService.updateFlag
            .pipe(
                startWith(),
                switchMap(() => {
                    return this.partnerService.get(this.route.snapshot.paramMap.get('id'));
                })
            )
            .subscribe((partner: Company) => {
                this.partnerStore.broadcastPartner(partner);
                this.partner = partner;
                this.isLoading = false;
            });
    }

    onSubmit(company: Company) {}
}
