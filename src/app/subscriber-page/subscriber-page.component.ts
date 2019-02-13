import { Component, OnInit } from "@angular/core";
import {
  AngularFirestoreDocument,
  AngularFirestore
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { User } from "../core/user";
import { AuthService } from "../core/auth.service";

@Component({
  selector: "app-subscriber-page",
  templateUrl: "./subscriber-page.component.html",
  styleUrls: ["./subscriber-page.component.css"]
})
export class SubscriberPageComponent implements OnInit {
  questionRef: AngularFirestoreDocument<any>;
  questions$: Observable<any>;

  user: User;

  constructor(private afs: AngularFirestore, public auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe(user => (this.user = user));
  }

  /*editQuestion() {
    if (this.auth.canEdit(this.user)) {
      this.questionRef.update({ title: "Edited Title!" });
    } else {
      console.error("you are not allowed to do that!");
    }
  }*/
}
