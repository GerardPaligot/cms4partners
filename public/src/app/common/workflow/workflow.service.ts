import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Workflow {
    id: number;
    steps: WorkflowStep[];
}

export type State = 'disabled' | 'enabled' | 'pending' | 'done';

export interface WorkflowStep {
    key: keyof WorkflowStatus;
    order: number;
    title: string;
    state: State;
    icon: string;
    description: string;
    class: 'is-primary' | 'is-danger' | 'is-secondary' | '';
}

export interface WorkflowStatus {
    filled?: State;
    validated?: State;
    sign?: State;
    paid?: State;
    received?: State;
    communicated?: State;
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
                    console.log(a.payload.doc.data());
                    const workflow = a.payload.doc.data() as Workflow;
                    return { ...workflow };
                });
            })
        );
    }

    public delete(id: string) {}
}
