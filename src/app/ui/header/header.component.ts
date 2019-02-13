import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  constructor(private route:ActivatedRoute,private router: Router,public user:UserService ) { }

  ngOnInit() {
  }

  addQuestion(){
    this.router.navigate(['add-question'],{relativeTo:this.route});
  }
  showQuestions(){
    this.router.navigate(['questions'],{relativeTo:this.route});
  }

}
