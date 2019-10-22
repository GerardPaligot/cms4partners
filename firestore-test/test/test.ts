/// <reference path='../node_modules/mocha-typescript/globals.d.ts' />
import * as firebase from "@firebase/testing";
import * as fs from "fs";

/*
 * ============
 *    Setup
 * ============
 */
const projectId = "firestore-emulator-example";
const coverageUrl = `http://localhost:8080/emulator/v1/projects/${projectId}:ruleCoverage.html`;

const rules = fs.readFileSync("../firestore.rules", "utf8");

/**
 * Creates a new app with authentication data matching the input.
 *
 * @param {object} auth the object to use for authentication (typically {uid: some-uid})
 * @return {object} the app.
 */
function authedApp(auth) {
  return firebase.initializeTestApp({ projectId, auth }).firestore();
}

/*
 * ============
 *  Test Cases
 * ============
 */
before(async () => {
  await firebase.loadFirestoreRules({ projectId, rules });
});

beforeEach(async () => {
  // Clear the database between tests
  await firebase.clearFirestoreData({ projectId });
});

after(async () => {
  await Promise.all(firebase.apps().map(app => app.delete()));
  console.log(`View rule coverage information at ${coverageUrl}\n`);
});

@suite
class MyApp {
  @test
  async "should let anyone read any profile"() {
    const db = authedApp(null);
    const profile = db.collection("companies").doc("alice");
    await firebase.assertSucceeds(profile.get());
  }

  @test
  async "should let anonymous people not able to get all companies"() {
    const db = authedApp(null);
    const profile = db.collection("companies");
    await firebase.assertFails(profile.get());
  }

  @test
  async "should let @gmail.com people not able to get all companies"() {
    const db = authedApp({
      uid: "emmanuel",
      email: "xxx@gmail.com"
    });
    const profile = db.collection("companies");
    await firebase.assertFails(profile.get());
  }

  @test
  async "should let gdglille people able to get all companies"() {
    const db = authedApp({
      uid: "emmanuel",
      email: "xxx@gdglille.org"
    });
    const profile = db.collection("companies");
    await firebase.assertSucceeds(profile.get());
  }
}
