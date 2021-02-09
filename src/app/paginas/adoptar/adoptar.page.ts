import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerrosService } from '../../services/perros.service';
import { AlertService } from '../../services/alert.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-adoptar',
  templateUrl: './adoptar.page.html',
  styleUrls: ['./adoptar.page.scss'],
})
export class AdoptarPage implements OnInit {
  data: any;
  perros:any;

  constructor(private route :ActivatedRoute,
    private DataService:PerrosService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private storage: Storage) {
    this.route.queryParams.subscribe(params=>{
      if (params && params.perro) {
        this.data = JSON.parse(params.perro);
      }
    })
   
   }
  
  ngOnInit() {}
    
  async Eadoptar(){
    console.log(this.data);
    let nombre = "";
    await this.storage.get('nombre').then(data => {
      nombre = data;
    },
      error => console.error(error)
    );
    let apellido = "";  
    await this.storage.get('apellido').then(data => {
      apellido = data;
    },
      error => console.error(error)
    );
    let email = "";  
    await this.storage.get('email').then(data => {
      email = data;
    },
      error => console.error(error)
    );
    let id = "";  
    await this.storage.get('id').then(data => {
      id = data;
    },
      error => console.error(error)
    );
    
    console.log(nombre+"\t"+apellido);
    this.DataService.postAdoptar('nicolascarrasco98@hotmail.com',this.data.codFunda,nombre,apellido,this.data._id,email,id).subscribe(
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
  }
 
  }

  
