import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerrosService } from '../../services/perros.service';
import { AlertService } from '../../services/alert.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-adoptar',
  templateUrl: './adoptar.page.html',
  styleUrls: ['./adoptar.page.scss'],
})
export class AdoptarPage implements OnInit {
  data: any;
  perros:any;
  constructor(private route :ActivatedRoute,private DataService:PerrosService,private alertService: AlertService,private navCtrl: NavController) {
    this.route.queryParams.subscribe(params=>{
      if (params && params.perro) {
        this.data = JSON.parse(params.perro);
      }
    })
   
   }
  
  ngOnInit() {}
    
  Eadoptar(){
    //this.DataService.postAdoptar(emailF, nombreF , nombre, apellido, idPerro, correoP);
    this.DataService.postAdoptar('nicolascarrasco98@hotmail.com','fundacion patito','joel','carrasco','11111','n@hotmail.com').subscribe(
      data => {
        console.log(data);
        this.alertService.presentToast("Su adopcion se esta procesando");
        this.navCtrl.navigateRoot('/perros');
      },
      error => {
        this.alertService.presentToast("Su adopcion se esta procesando");
        this.navCtrl.navigateRoot('/perros');
        console.log(error);
      }
    );
    console.log("adoptando");
  }
 
  }

  
