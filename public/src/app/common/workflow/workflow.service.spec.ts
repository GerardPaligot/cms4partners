import { TestBed } from '@angular/core/testing';

import { WorkflowService } from './workflow.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('PartnerService', () => {
    const AngularFirestoreStub = {
        collection: () => {
            return [];
        }
    };

    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [WorkflowService]
        })
    );

    it('should be created', () => {
        expect(true).toBe(true);
    });
});
