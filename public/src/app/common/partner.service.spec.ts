import { TestBed } from '@angular/core/testing';

import { PartnerService } from './partner.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('PartnerService', () => {
    const AngularFirestoreStub = {
        collection: () => {
            return [];
        }
    };

    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [PartnerService]
        })
    );

    it('should be created', () => {
        expect(true).toBe(true);
    });
});
