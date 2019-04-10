import { Signup } from './signup';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';  
import { from, Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  Url :string;  
  token : string;  
  header : any;

  constructor(private http:HttpClient) { 
    this.Url = 'https://localhost:44341/api/User';
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  Login(model : any){  
     var a =this.Url+'/Login';  
     return this.http.post<any>(a,model,{ headers: this.header});  
  }  
   CreateUser(signup:Signup)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Signup[]>(this.Url + '/Register/', signup, httpOptions)
   }  

   getInfo(model:any){
     var a=this.Url+'/getInfo';
     return this.http.post<any>(a,model,{headers:this.header});
   }
}  