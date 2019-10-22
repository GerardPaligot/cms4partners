import { TestBed } from '@angular/core/testing';

import { PartnerService } from './partner.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('PartnerService', () => {
    const AngularFirestoreStub = {
        collection: test => {
            return [];
        }
    };

    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [{ provide: AngularFirestore, useValue: AngularFirestoreStub }]
        })
    );

    it('should be created', () => {
        const service: PartnerService = TestBed.get(PartnerService);
        expect(service).toBeTruthy();
    });
});
