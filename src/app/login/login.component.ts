import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormArray, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private fb: FormBuilder , public auth: AuthService ,private router: Router) { }

  get registrationNo(){
    return this.loginForm.get('registrationNo');
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
    
      registrationNo: ['',[Validators.required]],
      password: ['']
    });
  }

  onSubmit(){
    console.log("Login...");
    this.router.navigate(['/home']);
  }

}
