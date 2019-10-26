import * as functions from 'firebase-functions';
import { sendEmail } from './utils/mail';
export const helloWorldMiddleware = (request: Partial<functions.Request>, response: Pick<functions.Response, 'send'>) => {
    response.send('Hello from Firebase!');
};
export const helloWorld = functions.https.onRequest(helloWorldMiddleware);
