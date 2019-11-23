import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Company } from '../common/Company';

@Injectable({
    providedIn: 'root'
})
export class PartnerStore {
    // tslint:disable-next-line:variable-name
    private _partner: BehaviorSubject<Company> = new BehaviorSubject<Company>(null);

    get partner$() {
        return this._partner.asObservable();
    }

    get partner() {
        return this._partner.getValue();
    }

    broadcastPartner(partner: Company) {
        this._partner.next(partner);
    }
}
