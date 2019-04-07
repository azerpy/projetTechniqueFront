import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  model : any={};    
    
  errorMessage:string;    
  constructor(private router:Router,private signupService:SignupService) { }    
    
    
  ngOnInit() {    
    sessionStorage.removeItem('Nom');    
    sessionStorage.clear();    
  }    
  login(){    
    debugger;    
    this.signupService.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/accueil']);    
          debugger;    
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    
 }   