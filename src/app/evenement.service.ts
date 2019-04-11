import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  Url :string;  
  token : string;  
  header : any;

  constructor(private http:HttpClient) { 
    this.Url = 'https://localhost:44341/api/Evenement';
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings); 
  }

  createEvenement(model:any){
    var a =this.Url+'/CreateEvenement';  
    return this.http.post<any>(a,model,{ headers: this.header});  
  }
}
