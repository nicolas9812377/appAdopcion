import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { FundacionesService } from 'src/app/services/fundaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perros-por-fundacion',
  templateUrl: './perros-por-fundacion.page.html',
  styleUrls: ['./perros-por-fundacion.page.scss'],
})
export class PerrosPorFundacionPage implements OnInit {
  data: any;
  perros:any;
  textoBUscar='';
  constructor(public route :ActivatedRoute,private DatosServicio:FundacionesService,private router:Router) {
    this.route.queryParams.subscribe(params=>{
      if (params && params.fundacion) {
        this.data = JSON.parse(params.fundacion);
      }
    })
   }

  ngOnInit() {

    this.DatosServicio.getPerrosFundaciones(this.data._id)
    .subscribe(
      (data)=>{this.perros = data["perroBD"];},
      (error)=>{console.error(error);}
    )
  }

  buscar(event){
    this.textoBUscar = event.detail.value;
  }

  queryParams(param){
    const datos: NavigationExtras={
      queryParams:{
        perro:JSON.stringify(param)
        
      }
    }

    this.router.navigate(["/adoptar"],datos);
  }
}
