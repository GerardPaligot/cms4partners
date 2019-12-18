import { DocumentData } from '@google-cloud/firestore';
import { sendEmailToAllContacts } from './mail';
import { generateAndStoreInvoice, generateInvoiceNumber, generateAndStoreProformaInvoiceAndConvention } from './files';
import partnershipValidated from './steps/partnershipValidated';
import PaymentReceivedFactory from '../emails/template/step-3-payment-received';

export enum StatusEnum {
    PENDING = 'pending',
    DONE = 'done'
}

export async function onDocumentChange(
    firestore: FirebaseFirestore.Firestore,
    before: DocumentData,
    after: DocumentData,
    id: string,
    settings
) {
    const status = after.status;
    if (before.status.validated !== status.validated && status.validated === StatusEnum.DONE) {
        await generateInvoiceNumber(firestore, id);

        await generateAndStoreProformaInvoiceAndConvention(firestore, after, id, settings);

        return firestore.doc('companies/' + id).update({
            ...partnershipValidated(after, id, settings)
        });
    } else if (before.status.sign !== status.sign && status.sign === StatusEnum.DONE) {
        return firestore.doc('companies/' + id).update({
            status: {
                ...status,
                paid: StatusEnum.PENDING
            }
        });
    } else if (before.status.paid !== status.paid && status.paid === StatusEnum.DONE) {
        await generateAndStoreInvoice(firestore, after, id, settings);

        const emailTemplate = PaymentReceivedFactory(after, `${settings.hosting.baseurl}/partner/${id}`);
        sendEmailToAllContacts(after, emailTemplate).catch(err => console.error(err));
        return firestore.doc('companies/' + id).update({
            status: {
                ...status,
                received: StatusEnum.PENDING,
                code: StatusEnum.PENDING
            }
        });
    } else if (status.received === StatusEnum.PENDING && after.twitter && after.linkedin !== '') {
        return firestore.doc('companies/' + id).update({
            status: {
                ...status,
                received: StatusEnum.DONE,
                communicated: StatusEnum.PENDING
            }
        });
    } else if (status.code === StatusEnum.PENDING) {
        const codes = after.codes || {};
        const undone = Object.values(codes).filter(code => !code);
        if (Object.keys(codes).length > 0 && undone.length === 0) {
            return firestore.doc('companies/' + id).update({
                status: {
                    ...status,
                    code: StatusEnum.DONE
                }
            });
        }
    }

    return Promise.resolve();
}
