import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { WorkflowStatus } from './workflow/workflow.service';
export interface Company {
    id?: string;
    name: string;
    address: string;
    zipCode: string;
    city: string;
    siret: string;
    representant: string;
    email: string | string[];
    role: string;
    sponsoring: string;
    secondSponsoring?: string;
    lang: string;
    status?: WorkflowStatus;
    devisUrl: string;
    conventionUrl: string;
    invoiceUrl: string;
    type?: 'esn' | 'other';
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    publicationDate?: Date;
    flyerUrl?: string;
    creationDate?: Date;
}

@Injectable({
    providedIn: 'root'
})
export class PartnerService {
    companiesCollectionRef: AngularFirestoreCollection<Company>;
    updateFlag: Subject<boolean> = new BehaviorSubject(true);
    constructor(private db: AngularFirestore) {
        this.companiesCollectionRef = this.db.collection<Company>('companies');
    }

    public add(company: Company) {
        const emails = Array.isArray(company.email) ? company.email : company.email.split(',');
        return this.companiesCollectionRef.add({
            ...company,
            status: {},
            email: emails
        });
    }

    public update(id: string, fields: Partial<Company>) {
        this.updateFlag.next();
        return this.companiesCollectionRef.doc(id).update(fields);
    }

    public get(id: string): Observable<Company> {
        return this.companiesCollectionRef
            .doc(id)
            .get()
            .pipe(
                map(d => {
                    return {
                        ...(d.data() as Company),
                        id
                    };
                })
            );
    }

    public getAll(): Observable<Company[]> {
        return this.companiesCollectionRef.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const company = a.payload.doc.data() as Company;
                    const id = a.payload.doc.id;
                    return { ...company, id };
                });
            })
        );
    }

    public delete(id: string) {}
}
