import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class PerrosService {

  constructor(private http: HttpClient,private env: EnvService) { }

  public getPerros(){
    return this.http.get(this.env.API_URL+"/perros");
  }
  
  public getPerrosInf(infID){
    return this.http.get(this.env.API_URL+"/perros/"+infID);
  }
 
}
