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

  public postAdoptar(emailF: String, nombreF: String , nombre: String, apellido: String, idPerro: String, correoP: String){
    console.log("casi envio");  
    return this.http.post(this.env.API_URL+"/adoptar",{emailF:emailF, nombreF:nombreF , nombre:nombre, apellido:apellido, idPerro:idPerro, correoP:correoP});
  } 
  
  public getPerrosInf(infID){
    return this.http.get(this.env.API_URL+"/perros/"+infID);  
  }

  
 
}
