import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Question } from '../models/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];

  constructor(public questionsService : QuestionsService) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(questions =>{
      console.log(questions);
      this.questions = questions;
    });
  }

}