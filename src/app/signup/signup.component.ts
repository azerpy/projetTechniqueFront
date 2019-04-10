import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core'; 
import { Signup } from '../signup';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data = false;    
  UserForm: any;    
  massage:string;  
  model : any={};    
      
  constructor(private router:Router,private loginService:SignupService, private cookie:CookieService) { }    
    
  ngOnInit() { 
    if(this.cookie.get("profil")){
      this.router.navigate(['/accueil']); 
    }   
  }    
  
  CreateUser()    
  {    
  this.loginService.CreateUser(this.model).subscribe(    
    data=>    
    {    
      if(data)    
        {  
          //debugger;     
          this.router.navigate(['/']);    
        }    
      this.massage = 'Data saved Successfully';    
    });    
  }    

}
