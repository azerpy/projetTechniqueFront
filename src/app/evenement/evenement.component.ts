import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  constructor(private cookie:CookieService, private router:Router) { }

  ngOnInit() {
    if(!this.cookie.get("profil")){
      this.router.navigate(['/']); 
    }
  }

}
