import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class FundacionesService {

  constructor(private http: HttpClient,private env: EnvService) { }

  public getFundaciones(){
    return this.http.get(this.env.API_URL+"/fundaciones");
  }
  public getPerrosFundaciones(fundacionID){
    return this.http.get(this.env.API_URL+"/perrosPorFun/"+fundacionID);
  }

 
}
