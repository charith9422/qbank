import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormArray, Validators } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Question } from '../models/models';
import { Router, RouterModule } from '@angular/router';
import { Timestamp } from 'rxjs/internal/operators/timestamp';




@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  
  
  
  addQuestionForm : FormGroup;
  dateAdded: string;
  private questionCollection: AngularFirestoreCollection<Question>;
  
  

  questions: Observable<Question[]>;
  constructor(private fb : FormBuilder,private afs : AngularFirestore,private router:Router,private route:RouterModule) {//
    this.questionCollection = afs.collection<Question>('questions'); 
    this.questions = this.questionCollection.valueChanges();
  }


  addQuestion(question: Question){
    const id = this.afs.createId();
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
 
  

  ngOnInit() {
    this.addQuestionForm = this.fb.group({
    
      date:[new Date],
      questionDef : ['',[Validators.required]],
      language : [''],
      answer : ['',[Validators.required]],
      moreAnswers: this.fb.array([])
    });  
  }

 
  onSubmit() {
    console.log(this.addQuestionForm.value);
    
    this.addQuestion(this.addQuestionForm.value);
    this.router.navigate(['/questions']);
    
  

    

  }

  redirect(){
    this.router.navigate(['/questions']);
  }


  
}
