import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LogRegService {
  isLoggedIn = false;
  token:any;
  constructor(private http: HttpClient,private storage: Storage, private env: EnvService) { }

  login(email: String, password: String) {
    return this.http.post(this.env.API_URL + '/login',
      {email: email, password: password}, 
    ).pipe(
      tap(token => {
        console.log(token);
        this.storage.set('nombre', token.usuario.nombre)
        this.storage.set('apellido', token.usuario.apellido)
        this.storage.set('email', token.usuario.email)
        this.storage.set('id', token.usuario._id)
        this.storage.set('token', token.token)
        .then( 
          () => {
            console.log('Token Stored'); 
          },
          error => console.error('Error storing item', error)
        );
        this.token = token; 
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  register(nombre: String, apellido: String, email: String, password: String) {
    return this.http.post(this.env.API_URL + '/usuario',
      {nombre: nombre, apellido: apellido, email: email, password: password}
    )
  }

  logout() {
    this.storage.remove("token");
    this.isLoggedIn = false;
    delete this.token;
  }


}
