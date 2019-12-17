import { DocumentData, Timestamp } from '@google-cloud/firestore';
import PartnerhipValidatedFactory from '../../emails/template/step-2-partnership-validation';
import { sendEmailToAllContacts } from '../mail';
import { addDays } from 'date-fns';

import { StatusEnum } from '../document-change';
export default (company: DocumentData, id: string, settings) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = addDays((company.creationDate as Timestamp).toDate(), 15);
    const dateTimeFormat = new Intl.DateTimeFormat('fr-FR', options);
    sendEmailToAllContacts(
        company,
        PartnerhipValidatedFactory(company, dateTimeFormat.format(date), `${settings.hosting.baseurl}/partner/${id}`)
    ).catch(err => console.error(err));

    return {
        status: {
            ...company.status,
            sign: StatusEnum.PENDING
        }
    };
};
