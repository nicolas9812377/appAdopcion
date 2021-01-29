import { Component, OnInit } from '@angular/core';

import {  NavController } from '@ionic/angular';
import { LogRegService } from '../../services/log-reg.service';
import { AlertService } from '../../services/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: LogRegService,
    private alertService: AlertService,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast("Bienvenido "+JSON.stringify(data.usuario));
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/');
      }
    );
  }
  

}
