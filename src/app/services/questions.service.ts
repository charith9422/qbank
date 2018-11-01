import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Question } from '../models/models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questionsCollection: AngularFirestoreCollection<Question>
  questions: Observable<Question[]>;
  constructor(public afs: AngularFirestore) {
    /*this.questionsCollection = afs.collection<Question>('questions'); 
    this.questions = this.questionsCollection.valueChanges();*/
    this.questions = this.afs.collection<Question>('questions').valueChanges();
   }

   getQuestions(){
     return this.questions;
   }
}
