import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth, app } from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "CMS4Partners";
  isLoggedIn: boolean = false;
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(authState => {
      this.isLoggedIn = authState && authState.email.endsWith("@gdglille.org");
    });
  }
  login() {
    this.afAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider().setCustomParameters({ hd: "gdglille.org" })
    );
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
