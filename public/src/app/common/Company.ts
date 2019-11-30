import { WorkflowStatus } from './workflow/workflow.service';
import { firestore } from 'firebase';
export interface Company {
    id?: string;
    tel: string;
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
    creationDate?: firestore.Timestamp;
    logoUrl?: string;
    conventionSignedUrl?: string;
    codes?: {
        [key: string]: boolean;
    };
}
