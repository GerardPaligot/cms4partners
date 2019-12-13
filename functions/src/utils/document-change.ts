import { DocumentData } from '@google-cloud/firestore';
//import * as admin from 'firebase-admin';
import { sendEmailToAllContacts } from './mail';
import * as functions from 'firebase-functions';

import partnershipValidated from './steps/partnershipValidated';
import PaymentReceivedFactory from '../emails/template/step-3-payment-received';
/*
async function generateInvoiceNumber(id: string) {
    const firestore = admin.firestore();

    const invoiceNumber = await firestore
        .doc('configuration/invoice_2020')
        .get()
        .then(invoice => {
            return (invoice.data() as any).number;
        });

    const formattedNumber = '2020_' + invoiceNumber.padStart(3, '0');

    await firestore
        .doc('companies/' + id)
        .update({
            invoiceNumber: formattedNumber
        })
        .catch(err => console.error(err));

    await firestore
        .doc('configuration/invoice_2020')
        .update({
            number: (parseInt(invoiceNumber, 10) + 1).toString()
        })
        .catch(err => console.error(err));

    return Promise.resolve(formattedNumber);
}*/
export function onDocumentChange(before: DocumentData, after: DocumentData, id: string) {
    const status = after.status;
    let update: { status?: { [key: string]: string }; invoiceUrl?: string; devisUrl?: string; conventionUrl?: string } = {};
    if (before.status.validated !== after.status.validated && after.status.validated === 'done') {
        update = partnershipValidated(after, id);
    } else if (before.status.sign !== after.status.sign && after.status.sign === 'done') {
        update = {
            status: {
                ...status,
                paid: 'pending'
            }
        };
    } else if (before.status.paid !== after.status.paid && after.status.paid === 'done') {
        // TODO call pour generer la facture et set l'invoiceURL

        const emailTemplate = PaymentReceivedFactory(after, `${functions.config().hosting.baseurl}/partner/${id}`);
        sendEmailToAllContacts(after, emailTemplate).catch(err => console.error(err));
        update = {
            status: {
                ...status,
                received: 'pending',
                code: 'pending'
            }
            //invoiceUrl: 'https://google.fr'
        };
    } else if (after.status.received === 'pending' && after.twitter && after.facebook && after.linkedin !== '') {
        update = {
            status: {
                ...status,
                received: 'done'
            }
        };
    } else if (after.status.code === 'pending') {
        const undone = Object.values(after.codes).filter(code => !code);
        if (undone.length === 0) {
            update = {
                status: {
                    ...status,
                    code: 'done'
                }
            };
        }
    }

    if (status.communicated !== 'pending' && status.communicated !== 'done' && update.status && update.status.received === 'done') {
        // si l'image et le message sont à done, mettre communicated a pending

        update = {
            status: {
                ...update.status,
                communicated: 'pending'
            }
        };
    }
    return update;
}
