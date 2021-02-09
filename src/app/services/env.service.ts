import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  //API_URL = 'https://prueba-suin.herokuapp.com';
  API_URL = 'http://localhost:3000';
  constructor() { }
}
