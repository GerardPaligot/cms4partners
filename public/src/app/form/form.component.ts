import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

interface Company {
  name: string;
}
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  companyProfile = new FormGroup({
    name: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    zipCode: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    siret: new FormControl("", [Validators.required]),
    representant: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    role: new FormControl("", [Validators.required]),
    sponsoring: new FormControl("", [Validators.required]),
    lang: new FormControl("", [Validators.required])
  });
  companiesCollectionRef: AngularFirestoreCollection<Company>;
  success = false;
  constructor(private db: AngularFirestore) {
    this.companiesCollectionRef = this.db.collection<Company>("companies");
  }

  ngOnInit() {}

  onSubmit() {
    this.companiesCollectionRef.add(this.companyProfile.value).then(() => {
      this.success = true;
    });
  }
}
