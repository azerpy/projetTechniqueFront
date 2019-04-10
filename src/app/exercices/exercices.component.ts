import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ExerciceService } from '../exercice.service';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {

  model : any={};  
  listExercices:any=[];
  constructor(private cookie:CookieService,private router:Router, private exerciceService:ExerciceService) { }

  ngOnInit() {
    if(!this.cookie.get("profil")){
      this.router.navigate(['/']); 
    }

    this.listExercices = this.exerciceService.getExercices().subscribe(
      data => {
      this.listExercices = Array.of(this.listExercices); 
      }
    );
  }

  deconnexion(){
    this.cookie.delete("profil");
    this.router.navigate(["/signin"]);
  }

  createExercice(){
    this.exerciceService.createExercice(this.model).subscribe(    
      data=>    
      { //redirect a une page qui affiche l'exercice créé 
       });
  }


}
