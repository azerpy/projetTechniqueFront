import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { EvenementService } from '../evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  model : any={};  

  constructor(private cookie:CookieService, private router:Router, private evenementService:EvenementService) { }

  ngOnInit() {
    if(!this.cookie.get("profil")){
      this.router.navigate(['/']); 
    }
  }

  deconnexion(){
    this.cookie.delete("profil");
    this.router.navigate(["/signin"]);
  }

  createEvenement(){
    this.evenementService.createEvenement(this.model).subscribe(    
      data=>    
      { //redirect a une page qui affiche l'exercice créé 
        this.router.navigate(['/accueil']);   
      });
  }
  
}
