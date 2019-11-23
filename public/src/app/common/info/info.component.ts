import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PartnerService } from '../partner.service';
import { Company } from '../Company';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent {
    readOnly = false;
    partner$: Observable<Company>;
    id: string;

    constructor(private partnerService: PartnerService, route: ActivatedRoute, aauth: AngularFireAuth) {
        this.id = route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.partner$ = this.partnerService.get(this.id);
        aauth.user.subscribe(user => {
            this.readOnly = !user || !user.email.endsWith('@gdglille.org');
            console.log(this.readOnly);
        });
    }

    onSubmit(company: Company) {
        this.partnerService.update(this.id, company);
    }
}
