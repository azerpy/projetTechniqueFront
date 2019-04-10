import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private cookie:CookieService, private router:Router) { }

  ngOnInit() {
    if(!this.cookie.get("profil")){
      this.router.navigate(['/']); 
    }
  }

}
