import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FooterComponent,HeaderComponent
  ],
  imports: [
    CommonModule,IonicModule
  ],exports:[
    FooterComponent,HeaderComponent
    
  ]
})
export class ComponentesModule { }
