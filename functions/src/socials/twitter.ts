const functions = require('firebase-functions');
const Twitter = require('twitter');

const consumer_key = functions.config().twitter['consumer_key'];
const consumer_secret = functions.config().twitter['consumer_secret'];
const access_token_key = functions.config().twitter['access_token_key'];
const access_token_secret = functions.config().twitter['access_token_secret'];

const client = new Twitter({
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret
});

const params = { screen_name: 'nodejs' };

async function getTweets() {
    return await new Promise((resolve, reject) => {
        client.get('statuses/user_timeline', params, function(error: any, tweets: any, response: any) {
            if (!error) {
                resolve(tweets);
            } else {
                reject(error);
            }
        });
    });
}

async function postMedia(message: string) {
    const data = require('fs').readFileSync('test.jpg');

    return await new Promise((resolve, reject) => {
        client.post('media/upload', { media: data }, function(mediaerror: any, media: any) {
            if (!mediaerror) {

                const status = {
                    status: message,
                    media_ids: media.media_id_string
                };

                client.post('statuses/update', status, function(error: any, tweet: any) {
                    if (!error) {
                        resolve(tweet);
                    } else {
                        reject(error);
                    }
                });
            } else {
                reject(mediaerror);
            }
        });
    });
}

export { getTweets, postMedia };
