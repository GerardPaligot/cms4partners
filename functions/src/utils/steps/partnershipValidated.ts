import { DocumentData, Timestamp } from '@google-cloud/firestore';
import PartnerhipValidatedFactory from '../../emails/template/step-2-partnership-validation';
import { sendEmailToAllContacts } from '../mail';
import { addDays } from 'date-fns';
import * as functions from 'firebase-functions';

export default (company: DocumentData, id: string) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = addDays((company.creationDate as Timestamp).toDate(), 15);
    const dateTimeFormat = new Intl.DateTimeFormat('fr-Fr', options);
    sendEmailToAllContacts(
        company,
        PartnerhipValidatedFactory(company, dateTimeFormat.format(date), `${functions.config().hosting.baseurl}/partner/${id}`)
    ).catch(err => console.error(err));

    //generateInvoiceNumber(id).catch(err => console.error(err));
    // TODO call pour generer la convention et le devis et set le devisUrl et conventionUrl
    return {
        status: {
            ...company.status,
            sign: 'pending'
        }
        //devisUrl: 'https://google.fr',
        //conventionUrl: 'https://google.fr'
    };
};
