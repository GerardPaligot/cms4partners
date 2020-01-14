import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Company } from './Company';
@Injectable({
    providedIn: 'root'
})
export class PartnerService {
    companiesCollectionRef: AngularFirestoreCollection<Company>;
    updateFlag: Subject<boolean> = new BehaviorSubject(true);
    constructor(private db: AngularFirestore, private afStorage: AngularFireStorage) {
        this.companiesCollectionRef = this.db.collection<Company>('companies');
    }

    public add(company: Company) {
        const emails = Array.isArray(company.email) ? company.email : company.email.split(',').map(e => e.trim());

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

    public uploadFile(id, file, property = 'logoUrl', bucket = 'logo') {
        const randomId = Math.random()
            .toString(36)
            .substring(2);

        const ref = this.afStorage.ref(`${bucket}/${id}`);
        ref.put(file)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                this.update(id, {
                    [property]: url
                });
            });
    }
}
