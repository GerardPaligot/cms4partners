import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Workflow {
    id: number;
    steps: WorkflowStep[];
}

export interface WorkflowStep {
    key: keyof WorkflowStatus;
    order: number;
    title: string;
    state: 'disabled' | 'enabled' | 'pending' | 'done';
    icon: string;
    description: string;
    class: 'is-primary' | 'is-danger' | 'is-secondary' | '';
}

export interface WorkflowStatus {
    isFilled?: boolean;
    isValidated?: boolean;
    isSign?: boolean;
    isPaid?: boolean;
    isReceived?: boolean;
    isCommunicated?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class WorkflowService {
    workflowCollectionRef: AngularFirestoreCollection<Workflow>;

    constructor(private db: AngularFirestore) {
        this.workflowCollectionRef = this.db.collection<Workflow>('workflows');
    }

    public add(workflow: Workflow) {
        return this.workflowCollectionRef.add(workflow);
    }

    public update(id: string, fields: Partial<Workflow>) {
        return this.workflowCollectionRef.doc(id).update(fields);
    }

    public getAll(): Observable<Workflow[]> {
        return this.workflowCollectionRef.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const workflow = a.payload.doc.data() as Workflow;
                    // const id = a.payload.doc.id;
                    return { ...workflow };
                });
            })
        );
    }

    public delete(id: string) {}
}
