import { DocumentData } from '@google-cloud/firestore';
import * as admin from 'firebase-admin';

function generateInvoiceNumber(id: string) {
    const firestore = admin.firestore();
    return firestore
        .doc('configuration/invoice_2019')
        .get()
        .then(invoice => {
            return (invoice.data() as any).number;
        })
        .then(invoiceNumber => {
            const formattedNumber = '2019_' + invoiceNumber.padStart(3, '0');
            firestore
                .doc('companies/' + id)
                .update({
                    invoiceNumber: formattedNumber
                })
                .catch(err => console.error(err));
            return [formattedNumber, invoiceNumber];
        })
        .then(([formattedNumber, invoiceNumber]) => {
            firestore
                .doc('configuration/invoice_2019')
                .update({
                    number: (parseInt(invoiceNumber, 10) + 1).toString()
                })
                .catch(err => console.error(err));
            return formattedNumber;
        })
        .catch(err => console.error(err));
}
export function onDocumentChange(before: DocumentData, after: DocumentData, id: string) {
    const status = after.status;
    let update: { status?: { [key: string]: string }; invoiceUrl?: string; devisUrl?: string; conventionUrl?: string } = {};
    if (before.status.validated !== after.status.validated && after.status.validated === 'done') {
        generateInvoiceNumber(id).catch(err => console.error(err));
        // TODO call pour generer la convention et le devis et set le devisUrl et conventionUrl
        update = {
            status: {
                ...status,
                sign: 'pending'
            },
            devisUrl: 'https://google.fr',
            conventionUrl: 'https://google.fr'
        };
    } else if (before.status.sign !== after.status.sign && after.status.sign === 'done') {
        update = {
            status: {
                ...status,
                paid: 'pending'
            }
        };
    } else if (before.status.paid !== after.status.paid && after.status.paid === 'done') {
        // TODO call pour generer la facture et set l'invoiceURL
        update = {
            status: {
                ...status,
                received: 'pending'
            },
            invoiceUrl: 'https://google.fr'
        };
    } else if (after.status.received === 'pending' && after.twitter !== '' && after.facebook !== '' && after.linkedin !== '') {
        update = {
            status: {
                ...status,
                received: 'done'
            }
        };
    }
    // TODO quand l'URL vers l'image a ete ajouté, mettre a done

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
