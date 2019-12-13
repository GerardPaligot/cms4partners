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

    const update = onDocumentChange(before, after, id);

    return firestore.doc('companies/' + id).update({
        ...update
    });
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
