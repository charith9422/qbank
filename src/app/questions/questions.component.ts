import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Question } from '../models/models';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FilterPipe } from 'ngx-filter-pipe';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {


 
  questions: Question[];
  searchTerm:string;
  addedDate:Date;
  
  //questionFilter: any = { language: '' };
  

  constructor(public questionsService : QuestionsService , public user:UserService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(questions =>{
      console.log(questions);
      this.questions = questions;

    });

    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },3000);
  }

}
