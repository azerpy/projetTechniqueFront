import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { debug } from 'util';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  private model: any={};

  constructor(private cookie:CookieService, private router:Router, private signUpService:SignupService) { }

  ngOnInit() {
    if(!this.cookie.get("profil")){
      this.router.navigate(['/']); 
     
    } 
      this.getInfo();
  }

  deconnexion(){
    this.cookie.delete("profil");
    this.router.navigate(["/signin"]);
  }

  getInfo(){
    this.model.id=this.cookie.get("profil");
    this.signUpService.getInfo(this.model).subscribe(
      data => {
          this.model = data;
      }
    )
  }

}
