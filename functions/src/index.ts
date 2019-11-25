import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { sendEmail } from './utils/mail';
import { onDocumentChange } from './utils/document-change';

admin.initializeApp();
const firestore = admin.firestore();
export const helloWorldMiddleware = (request: Partial<functions.Request>, response: Pick<functions.Response, 'send'>) => {
    response.send('Hello from Firebase!');
};
export const helloWorld = functions.https.onRequest(helloWorldMiddleware);

function sendWelcomeEmail(emails: string[], id: string) {
    return Promise.all(
        emails.map(email => {
            return sendEmail(
                email.trim(),
                '🎉 Partneriat Devfest Lille 2020',
                `
                    <p>
                        Vous pouvez à présent suivre l'état d'avancement de notre partenariat en visitant votre page dédiée ${
                            functions.config().hosting.baseurl
                        }/dashboard/${id}. 
                    </p>
                `
            );
        })
    );
}

export const newPartner = functions.firestore.document('companies/{companyId}').onCreate((snap, context) => {
    const company = snap.data() || {};
    const id = snap.id;
    return sendWelcomeEmail(company.email, snap.id)
        .then(() => {
            return sendEmail(
                functions.config().mail.to,
                '🎉 Nouveau Partenaire ' + company.name,
                `
            La société ${company.name} souhaite devenir partenaire ${company.sponsoring}
        `
            );
        })
        .then(() => {
            return firestore.doc('companies/' + id).update({
                ...company,
                status: {
                    filled: 'done',
                    validated: 'pending'
                }
            });
        })
        .catch(err => console.log(err));
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
