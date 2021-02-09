import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptarPageRoutingModule } from './adoptar-routing.module';

import { AdoptarPage } from './adoptar.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptarPageRoutingModule,
    ComponentesModule
  ],
  declarations: [AdoptarPage]
})
export class AdoptarPageModule {}
