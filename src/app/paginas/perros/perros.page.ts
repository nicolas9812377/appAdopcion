import { Component, OnInit } from '@angular/core';
import { PerrosService } from '../../services/perros.service';
import { NavigationExtras, Router } from '@angular/router';
import { FundacionesService } from '../../services/fundaciones.service';
import { async } from '@angular/core/testing';
import { element } from 'protractor';
@Component({
  selector: 'app-perros',
  templateUrl: './perros.page.html',
  styleUrls: ['./perros.page.scss'],
})
export class PerrosPage implements OnInit {
  perros:any;
  fundaciones = [];
  textoBUscar='';
  constructor(private DataService:PerrosService,private fundacionS:FundacionesService,private router:Router) { }

 async ngOnInit() {
    this.fundacionS.getFundaciones().subscribe(
      (data)=>{
        // console.log(data.fundacion);
        data.fundacion.forEach(async(element,index) => {
          await this.fundacionS.getPerrosFundaciones(element._id).subscribe(
            async (dat)=>{
              await this.fundaciones.push({element,dat}); 
            }
          );
        });
        console.log(this.fundaciones);      
      },         
      (error)=>{console.error(error);}
    );

    /*
    this.DataService.getPerros()
    .subscribe(
      (data)=>{this.perros = data.perro ;console.log(data.perro);},
      (error)=>{console.error(error);}
    )
    */
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
  console.log(datos)
  this.router.navigate(["/adoptar"],datos);
}
    

}
