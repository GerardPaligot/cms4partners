import * as functions from 'firebase-functions';
import { sendEmail } from './utils/mail';

export const helloWorldMiddleware = (request: Partial<functions.Request>, response: Pick<functions.Response, 'send'>) => {
    response.send('Hello from Firebase!');
};
export const helloWorld = functions.https.onRequest(helloWorldMiddleware);

export const newPartner = functions.firestore.document('companies/{companyId}').onCreate((snap, context) => {
    const company = snap.data() || {};
    return sendEmail(
        'emmanuel.demey@gdglille.org',
        '🎉 Nouveau Partenaire',
        `
        La société ${company.name} souhaite devenir partenariat ${company.sponsoring}
    `
    );
});
