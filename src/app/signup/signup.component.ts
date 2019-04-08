import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core'; 
import { Signup } from '../signup';
import { Router } from '@angular/router';
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
      
  constructor(private router:Router,private loginService:SignupService) { }    
    
  ngOnInit() {    
   
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
