import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptarPageRoutingModule } from './adoptar-routing.module';

import { AdoptarPage } from './adoptar.page';
import { ComponentesModule } from '../../componentes/componentes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptarPageRoutingModule,
    ComponentesModule,
    RouterModule.forChild([{ path: '', component: AdoptarPage }])
  ],
  declarations: [AdoptarPage]
})
export class AdoptarPageModule {}
