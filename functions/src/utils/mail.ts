const mailjet = require("node-mailjet").connect(
  "26f08a9d131bbf9a47bb7e273fc6182f",
  "0dcea32f41858cb131b2169f2df70489"
);

function sendEmail(to: string, subject: string, body: string) {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "emmanuel@gdglille.org",
          Name: "GDG Lille"
        },
        To: [
          {
            Email: to
          }
        ],
        Subject: subject,
        HTMLPart: body,
        CustomID: "AppGettingStartedTest"
      }
    ]
  });
  request
    .then((result: { body: string }) => {
      console.log(result.body);
    })
    .catch((err: { statusCode: number }) => {
      console.log(err.statusCode);
    });
}
