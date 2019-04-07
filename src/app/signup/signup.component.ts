import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    
import { Signup } from '../signup';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data = false;    
  UserForm: any;    
  massage:string;    
  constructor(private formbulider: FormBuilder,private loginService:SignupService) { }    
    
  ngOnInit() {    
    this.UserForm = this.formbulider.group({    
      Prenom: ['', [Validators.required]],    
      Nom: ['', [Validators.required]],    
      Mdp: ['', [Validators.required]],    
      Age: ['', [Validators.required]],    
      Poids: ['', [Validators.required]],    
      Taille: ['', [Validators.required]],    
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.UserForm.value;    
    this.CreateUser(user);    
  }    
  CreateUser(signup:Signup)    
  {    
  this.loginService.CreateUser(signup).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.UserForm.reset();    
    });    
  }    

}
