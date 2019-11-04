import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { sendEmail } from './utils/mail';

admin.initializeApp();
const firestore = admin.firestore();
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
                return firestore.doc('companies/' + id).update({
                    creationDate: new Date(),
                    status: {
                        filled: 'done',
                        validated: 'pending'
                    }
                });
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

export const partnershipUpdated = functions.firestore.document('companies/{companyId}').onUpdate((changes, context) => {
    const before = changes.before.data();
    const after = changes.after.data();
    if (!before || !after) {
        return;
    }
    const id = changes.after.id;

    const status = after.status;
    let update = {};
    if (before.status.validated !== after.status.validated && after.status.validated === 'done') {
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

    if (status.communicated !== 'pending' && status.communicated !== 'done' && status.received === 'done') {
        // si l'image et le message sont à done, mettre communicated a pending

        update = {
            status: {
                ...status,
                communicated: 'pending'
            }
        };
    }

    return firestore.doc('companies/' + id).update({
        ...update
    });
});
