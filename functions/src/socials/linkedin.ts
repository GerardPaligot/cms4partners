const functions = require('firebase-functions');
const axios = require('axios');
const request = require('request');

const fs = require('fs');
const querystring = require('querystring');
const FormData = require('form-data');

const cliendID = ''; // functions.config().linkedin['client-id'];
const clientSecret = ''; //  functions.config().linkedin['client-secret'];
const redirect_uri = 'http://localhost';
const baseUrl = 'https://api.linkedin.com/v2';
const urlAuthCode = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${cliendID}&redirect_uri=${redirect_uri}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
const urlAccessToken = 'https://www.linkedin.com/oauth/v2/accessToken';

const authCode = ''; // functions.config().linkedin['auth-code'];
const accessToken = functions.config().linkedin['access-token'];
const userId = functions.config().linkedin['userid'];

async function postLinkedinMessageWithImage() {
    const imageUrl = 'https://pbs.twimg.com/profile_images/1201581886289719296/ByYi20NW_400x400.jpg';
    // const image = await getImage(imageUrl);

    const uploadInformations = await registerUpload();
    const uploadFileUrl = uploadInformations.value.uploadMechanism['com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest'].uploadUrl;
    // const assetURN = uploadInformations.value.asset;

    console.log('🐧🐧🐧🐧🐧🐧🐧');
    console.log(uploadInformations.value);
    console.log('🐧🐧🐧🐧🐧🐧🐧');

    await uploadFile(uploadFileUrl, imageUrl);
    // if uploadFile works uncomment me to share content
    // await postLinkedinMessage(assetURN);
}

/**
 * Upload File
 * Doc: https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/rich-media-shares#sample-curl-request
 * Tips: https://github.com/axios/axios/issues/789#issuecomment-387302138
 */
async function uploadFile(uploadFileUrl: string, imageUrl: string) {
    const form = new FormData();

    //
    form.append('files', request(imageUrl));

    const config = {
        headers: {
            ...form.getHeaders(),
            Authorization: `Bearer ${accessToken}`
        }
    };

    console.log('_______________');
    console.log(uploadFileUrl);
    console.log(config);
    console.log('_______________');

    return await axios
        .post(uploadFileUrl, form, config)
        .then((resp: any) => {
            console.log('🐧🐧🐧🐧🐧🐧🐧');
            console.log(resp);
            console.log('🐧🐧🐧🐧🐧🐧🐧');
        })
        .catch((error: any) => {
            console.log('👷‍♂️👷‍♂️👷‍♂️👷‍♂️👷‍♂️');
            console.log(error.toJSON());
            console.log('👷‍♂️👷‍♂️👷‍♂️👷‍♂️👷‍♂️');
        });
}

/**
 * Register image to upload
 * Doc: https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/rich-media-shares#register-an-upload-for-image
 */
async function registerUpload() {
    const url = `${baseUrl}/assets?action=registerUpload`;

    console.log(accessToken);

    const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${accessToken}`
        }
    };

    const content = {
        registerUploadRequest: {
            owner: `urn:li:person:${userId}`,
            recipes: ['urn:li:digitalmediaRecipe:feedshare-image'],
            serviceRelationships: [
                {
                    identifier: 'urn:li:userGeneratedContent',
                    relationshipType: 'OWNER'
                }
            ]
        }
    };

    return await axios
        .post(url, content, config)
        .then((result: any) => {
            return result.data;
        })
        .catch((err: any) => {
            console.log(err);
        });
}

// async function getImage(url: string) {
//     return await axios
//         .get(url, {
//             responseType: 'arraybuffer'
//         })
//         .then((response: any) => Buffer.from(response.data, 'binary'));
// }

function getMe() {
    const url = `${baseUrl}/me`;

    const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${accessToken}`
        }
    };

    axios
        .get(url, config)
        .then((result: any) => {
            console.log(result);
        })
        .catch((err: any) => {
            console.log(err);
        });
}

async function postLinkedinMessage(entityURN: string) {
    const url = `${baseUrl}/shares`;

    const contentToShare = {
        content: {
            contentEntities: [
                {
                    entity: entityURN
                }
            ],
            description: 'content description',
            title: 'Test Share with Content'
        },
        distribution: {
            linkedInDistributionTarget: {}
        },
        subject: 'Test Share Subject',
        text: {
            text: 'Test Share!'
        },
        owner: `urn:li:person:${userId}`
    };

    const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${accessToken}`
        }
    };

    return await axios
        .post(url, JSON.stringify(contentToShare), config)
        .then((result: any) => {
            console.log(result);
        })
        .catch((err: any) => {
            console.log(err);
        });
}

function getAuthCode() {
    console.log(authCode);
    return authCode;
}

function getAuthCodeUrl() {
    console.log(urlAuthCode);
    return urlAuthCode;
}

function getAccessTokenFromCode(code: string) {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    const requestBody = {
        grant_type: 'authorization_code',
        code,
        redirect_uri,
        client_id: cliendID,
        client_secret: clientSecret
    };

    axios
        .post(urlAccessToken, querystring.stringify(requestBody), config)
        .then((result: any) => {
            console.log(result);
        })
        .catch((err: any) => {
            console.log(err);
        });
}

export { registerUpload, getMe, getAccessTokenFromCode, getAuthCodeUrl, getAuthCode, postLinkedinMessageWithImage, postLinkedinMessage };
