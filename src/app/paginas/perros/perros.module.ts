import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerrosPageRoutingModule } from './perros-routing.module';

import { PerrosPage } from './perros.page';

import { PipesModule } from '../../pipes/pipes.module';
import { ComponentesModule } from '../../componentes/componentes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerrosPageRoutingModule,
    PipesModule,
    ComponentesModule
  ],
  declarations: [PerrosPage]
})
export class PerrosPageModule {}
