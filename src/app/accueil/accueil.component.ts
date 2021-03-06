import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private cookie:CookieService, private router:Router) { }

  ngOnInit() {
    if(!this.cookie.get("profil")){
      this.router.navigate(['/']); 
    }
  }

  deconnexion(){
    this.cookie.delete("profil");
    this.router.navigate(["/signin"]);
  }

}
