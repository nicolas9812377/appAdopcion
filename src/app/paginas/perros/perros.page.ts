import { Component, OnInit } from '@angular/core';
import { PerrosService } from '../../services/perros.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-perros',
  templateUrl: './perros.page.html',
  styleUrls: ['./perros.page.scss'],
})
export class PerrosPage implements OnInit {
  perros:any;
  textoBUscar='';
  constructor(private DataService:PerrosService,private router:Router) { }

  ngOnInit() {
    this.DataService.getPerros()
    .subscribe(
      (data)=>{this.perros = data.perro ;},
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
  console.log(datos)
  this.router.navigate(["/adoptar"],datos);
}
    

}
