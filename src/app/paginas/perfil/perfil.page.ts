import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre: String;
  apellido: String;
  email: String;

  constructor(private storage: Storage) { }

 async ngOnInit() {
    await this.storage.get('nombre').then(data => {
      this.nombre = data;
    },
      error => console.error(error)
    );

    await this.storage.get('apellido').then(data => {
      this.apellido = data;
    },
      error => console.error(error)
    );
    
    await this.storage.get('email').then(data => {
      this.email = data;
    },
      error => console.error(error)
    );
    
  }


}
