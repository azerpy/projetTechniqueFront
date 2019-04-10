import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  Url :string;  
  token : string;  
  header : any;

  constructor(private http:HttpClient) { 
    this.Url = 'https://localhost:44341/api/Exercice';
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings); 
  }

  createExercice(model:any){
    var a =this.Url+'/CreateExercice';  
    return this.http.post<any>(a,model,{ headers: this.header});  
  }

  getExercices(){
    return this.http.get(this.Url,{headers:this.header});
  }
}
