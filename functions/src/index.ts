import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { sendEmail, sendEmailToAllContacts } from './utils/mail';
import { onDocumentChange } from './utils/document-change';
import { DocumentData, Timestamp } from '@google-cloud/firestore';

import WelcomeEmailFactory from './emails/template/step-1-partnership-demand';
admin.initializeApp();
const firestore = admin.firestore();

function sendWelcomeEmail(company: DocumentData, id: string) {
    const emailTemplate = WelcomeEmailFactory(company, `${functions.config().hosting.baseurl}/partner/${id}`);
    return sendEmailToAllContacts(company, emailTemplate);
}

function addCreationDate(id: string) {
    return firestore
        .doc('companies/' + id)
        .update({
            creationDate: Timestamp.fromDate(new Date())
        })
        .catch(err => console.log(err));
}

function updatesStatus(id: string, company: any, status: any) {
    return firestore
        .doc('companies/' + id)
        .update({
            ...company,
            status
        })
        .catch(err => console.log(err));
}
export const newPartner = functions.firestore.document('companies/{companyId}').onCreate(async (snap, context) => {
    const company = snap.data() || {};
    const id = snap.id;
    await addCreationDate(id);
    await sendWelcomeEmail(company, snap.id);
    await sendEmail(
        functions.config().mail.to,
        '🎉 Nouveau Partenaire ' + company.name,
        `
La société ${company.name} souhaite devenir partenaire ${company.sponsoring}
`
    );

    return updatesStatus(id, company, {
        filled: 'done',
        validated: 'pending'
    });
});

export const partnershipUpdated = functions.firestore.document('companies/{companyId}').onUpdate((changes, context) => {
    const before = changes.before.data();
    const after = changes.after.data();
    if (!before || !after) {
        return;
    }
    const id = changes.after.id;

    return onDocumentChange(firestore, before, after, id, functions.config());
});

exports.updateConventionSignedUrlProperty = functions.storage.object().onFinalize(async object => {
    const name = object.name || '';
    return admin
        .storage()
        .bucket()
        .file(name)
        .getSignedUrl({ action: 'read', expires: '03-17-2025' })
        .then(([url]) => {
            return firestore.doc('companies/' + name.replace('signed/', '')).update({
                conventionSignedUrl: url
            });
        });
});

exports.scheduledFunctionCrontab = functions.pubsub
    .schedule('0 9 * * *')
    .timeZone('Europe/Paris')
    .onRun(context => {
        const today = new Date();
        const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today
            .getDate()
            .toString()
            .padStart(2, '0')}`;

        return firestore
            .collection('companies')
            .where('publicationDate', '==', date)
            .get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.error('No matching documents.');
                    return;
                }

                snapshot.forEach(doc => {
                    const company = doc.data();
                    if (company.linkedin) {
                        console.log(`Posting linkedin message for ${company.name}`);
                        // TODO
                    }
                    if (company.twitter) {
                        console.log(`Posting twitter message for ${company.name}`);

                        // TODO
                    }
                });
            })
            .catch(err => {
                console.error('Error getting documents', err);
            });
        return null;
    });
