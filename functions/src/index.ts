import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { sendEmail } from './utils/mail';

admin.initializeApp();

export const helloWorldMiddleware = (request: Partial<functions.Request>, response: Pick<functions.Response, 'send'>) => {
    response.send('Hello from Firebase!');
};
export const helloWorld = functions.https.onRequest(helloWorldMiddleware);

function createUsers(emails: string[], id: string) {
    const generator = require('generate-password');

    return emails.map(email => {
        const emailTrim = email.trim();
        const password = generator.generate({
            length: 10,
            numbers: true
        });

        return admin
            .auth()
            .createUser({
                email: emailTrim,
                displayName: emailTrim,
                emailVerified: true,
                password
            })
            .then(() => {
                return sendEmail(
                    emailTrim,
                    '🎉 Votre compte sur CMS4Partners a été créé',
                    `
                        Votre compte pour la plateforme CMS4Devfest a été crée:
                        
                        login: ${emailTrim}
                        password: ${password}
                        <p>
                            Vous pouvez à présent suivre l'état d'avancement de notre partenariat en visitant votre page dédiée ${
                                functions.config().hosting.baseurl
                            }/dashboard/${id}. 
                        </p>
                    `
                );
            });
    });
}
export const newPartner = functions.firestore.document('companies/{companyId}').onCreate((snap, context) => {
    const company = snap.data() || {};

    return Promise.all(createUsers(company.email, snap.id))
        .then(() => {
            return sendEmail(
                functions.config().mail.to,
                '🎉 Nouveau Partenaire ' + company.name,
                `
            La société ${company.name} souhaite devenir partenaire ${company.sponsoring}
        `
            );
        })
        .catch(err => console.log(err));
});
