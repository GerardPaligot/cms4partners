import * as firebase from '@firebase/testing';
import * as fs from 'fs';

const projectId = 'firestore-emulator-example';
const coverageUrl = `http://localhost:8080/emulator/v1/projects/${projectId}:ruleCoverage.html`;

const rules = fs.readFileSync('../firestore.rules', 'utf8');

/**
 * Creates a new app with authentication data matching the input.
 *
 * @param {object} auth the object to use for authentication (typically {uid: some-uid})
 * @return {object} the app.
 */
function authedApp(auth) {
    return firebase.initializeTestApp({ projectId, auth }).firestore();
}

describe('security', () => {
    beforeAll(async () => {
        await firebase.loadFirestoreRules({ projectId, rules });
    });

    beforeEach(async () => {
        // Clear the database between tests
        await firebase.clearFirestoreData({ projectId });
    });

    afterAll(async () => {
        await Promise.all(firebase.apps().map(app => app.delete()));
    });

    it('should let anonymous people not able to get all companies', async () => {
        const db = authedApp(null);
        const profile = db.collection('companies');
        await firebase.assertFails(profile.get());
    });

    it('should let @gmail.com people not able to get all companies', async () => {
        const db = authedApp({
            uid: 'emmanuel',
            email: 'xxx@gmail.com'
        });
        const profile = db.collection('companies');
        await firebase.assertFails(profile.get());
    });

    it('should let gdglille people able to get all companies', async () => {
        const db = authedApp({
            uid: 'emmanuel',
            email: 'xxx@gdglille.org'
        });
        const profile = db.collection('companies');
        await firebase.assertSucceeds(profile.get());
    });
});
