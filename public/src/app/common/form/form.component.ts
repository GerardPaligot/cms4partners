import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from '../Company';
import { Observable, of } from 'rxjs';
import { PartnerService } from '../partner.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input()
    readOnly = false;

    defaultCompany = {
        name: '',
        tel: '',
        address: '',
        zipCode: '',
        city: '',
        siret: '',
        representant: '',
        email: '',
        role: '',
        sponsoring: '',
        secondSponsoring: '',
        lang: '',
        status: {},
        devisUrl: '',
        conventionUrl: '',
        invoiceUrl: ''
    };

    @Input()
    company: Observable<Company> = of(this.defaultCompany);

    companyProfile: FormGroup;

    @Output()
    public submitEvent = new EventEmitter<Company>();

    update = false;

    constructor(private partnerservice: PartnerService, private router: Router) {}
    ngOnInit() {
        this.initFormGroup(this.defaultCompany);

        this.company.subscribe(c => {
            this.update = c.name !== '';
            console.log(this.update);

            this.initFormGroup(c);
        });
    }

    private initFormGroup(company: Company) {
        this.companyProfile = new FormGroup({
            name: new FormControl({ value: company.name, disabled: this.readOnly }, [Validators.required]),
            tel: new FormControl({ value: company.tel, disabled: this.readOnly }, [Validators.required]),
            address: new FormControl({ value: company.address, disabled: this.readOnly }, [Validators.required]),
            zipCode: new FormControl({ value: company.zipCode, disabled: this.readOnly }, [Validators.required]),
            city: new FormControl({ value: company.city, disabled: this.readOnly }, [Validators.required]),
            siret: new FormControl({ value: company.siret, disabled: this.readOnly }, [Validators.required]),
            representant: new FormControl({ value: company.representant, disabled: this.readOnly }, [Validators.required]),
            email: new FormControl({ value: company.email, disabled: this.readOnly }, [Validators.required]),
            role: new FormControl({ value: company.role, disabled: this.readOnly }, [Validators.required]),
            sponsoring: new FormControl({ value: company.sponsoring, disabled: this.readOnly }, [Validators.required]),
            secondSponsoring: new FormControl({ value: company.secondSponsoring, disabled: this.readOnly }),
            lang: new FormControl({ value: company.lang, disabled: this.readOnly }, [Validators.required])
        });
    }
    onSubmitForm() {
        if (this.update) {
            this.submitEvent.emit(this.companyProfile.value);
        } else {
            this.partnerservice
                .add({
                    ...this.companyProfile.value
                })
                .then(doc => {
                    this.router.navigate(['partner', doc.id]);
                });
        }
    }
}
