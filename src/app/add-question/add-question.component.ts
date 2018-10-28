import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormArray, Validators } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Question } from '../models/models';



@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  addQuestionForm : FormGroup;
  private questionCollection: AngularFirestoreCollection<Question>;

  questions: Observable<Question[]>;
  constructor(private fb : FormBuilder ,private afs : AngularFirestore) {
    this.questionCollection = afs.collection<Question>('questions'); 
    this.questions = this.questionCollection.valueChanges();
  }


  addQuestion(question: Question){
    const id = this.afs.createId();
    //const questionFinal: Question = { id , question};
    //this.questionCollection.add(question);
    this.questionCollection.doc(id).set(question);
  }

  get questionDef(){
    return this.addQuestionForm.get('questionDef');
  }

  get answer(){
    return this.addQuestionForm.get('answer');
  }

  get moreAnswers(){
    return this.addQuestionForm.get('moreAnswers') as FormArray;
  }

  addMoreAnswers(){
    this.moreAnswers.push(this.fb.control(''));
  }
  //languages = ['Java' , 'C++' , 'Mysql' , 'MongoDb'];
  

  ngOnInit() {
    this.addQuestionForm = this.fb.group({
      questionDef : ['',[Validators.required]],
      language : [''],
      answer : ['',[Validators.required]],
      moreAnswers: this.fb.array([])
    });  
  }

  onSubmit() {
    console.log(this.addQuestionForm.value);
    this.addQuestion(this.addQuestionForm.value);
    

  }


  
}
