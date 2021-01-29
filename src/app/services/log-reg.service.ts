import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogRegService {
  isLoggedIn = false;
  token:any;
  constructor(private http: HttpClient,private storage: NativeStorage, private env: EnvService) { }

  login(email: String, password: String) {
    return this.http.post(this.env.API_URL + '/login',
      {email: email, password: password}, 
    ).pipe(
      tap(token => {
        this.storage.setItem('token', token)
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
