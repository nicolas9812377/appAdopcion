import { Component, OnInit } from '@angular/core';
import { FundacionesService } from '../../services/fundaciones.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-fundaciones',
  templateUrl: './fundaciones.page.html',
  styleUrls: ['./fundaciones.page.scss'],
}) 
export class FundacionesPage implements OnInit {
     
  
  fundaciones:any
  textoBUscar='';
  constructor(private DatosServicio:FundacionesService,private router:Router) { }

  ngOnInit() {
    this.DatosServicio.getFundaciones()
    .subscribe(
      (data)=>{this.fundaciones = data["fundacion"] ;},         
      (error)=>{console.error(error);}
    )
  }

  buscar(event){
    this.textoBUscar = event.detail.value;
  }

  public queryParams(param){
    const extras: NavigationExtras={
      queryParams:{
        fundacion:JSON.stringify(param)
      }
    }
    console.log(extras)
    this.router.navigate(["/perros-por-fundacion"],extras);
  }

}
