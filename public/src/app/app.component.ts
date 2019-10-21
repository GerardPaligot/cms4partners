import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "CMS4Partners";
  constructor(public afAuth: AngularFireAuth) {}
  login() {
    this.afAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider().setCustomParameters({ hd: "gdglille.org" })
    );
  }
}
