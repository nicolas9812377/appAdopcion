import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LogRegService } from '../../services/log-reg.service';
import { AlertService } from '../../services/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: LogRegService,
    private navCtrl: NavController,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    this.authService.register(form.value.nombre, form.value.apellido, form.value.email, form.value.password).subscribe(
      data => {
        this.authService.login(form.value.email, form.value.password).subscribe(
          data => {
            this.alertService.presentToast("Bienvenido "+JSON.stringify(data["usuario"]));
          },
          error => {
            console.log(error);
          },
          () => {
            this.navCtrl.navigateRoot('/');
          }
        );
        this.alertService.presentToast(data['message']);
      },
      error => {
        console.log(error);
        this.alertService.presentToast(error.error.err['message']);
      },
      () => {
        
      }
    );
  }

}
