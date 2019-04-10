import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import { FormsModule } from '@angular/forms';  
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  model : any={};    
    
  errorMessage:string;    
  constructor(private router:Router,private signupService:SignupService, private cookie:CookieService) { }    
    
    
  ngOnInit() {    
    if(this.cookie.get("profil")){
      this.router.navigate(['/accueil']); 
    }
  }    
  login(){    
    //debugger;    
    this.signupService.Login(this.model).subscribe(    
      data => {    
        //debugger;    
        if(data)    
        {  
          //debugger;     
          this.cookie.set("profil",data.id);
          this.router.navigate(['/accueil']);    
        }    
        else{  
          //debugger;  
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    
 }   