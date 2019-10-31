const functions = require('firebase-functions');

export function getFrom() {
    return {
        From: {
            Email: functions.config().mail.from,
            Name: 'GDG Lille'
        }
    };
}
export function sendEmail(to: string, subject: string, body: string) {
    const mailjet = require('node-mailjet').connect(functions.config().mailjet.api, functions.config().mailjet.private);
    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                ...getFrom(),
                To: [
                    {
                        Email: to
                    }
                ],
                Subject: subject,
                HTMLPart: body,
                CustomID: 'AppGettingStartedTest'
            }
        ]
    });
    return request
        .then((result: { body: string }) => {
            console.log(result.body);
        })
        .catch((err: { statusCode: number }) => {
            console.log(err);
        });
}
