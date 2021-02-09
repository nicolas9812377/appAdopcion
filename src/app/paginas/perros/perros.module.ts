import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerrosPageRoutingModule } from './perros-routing.module';

import { PerrosPage } from './perros.page';

import { PipesModule } from '../../pipes/pipes.module';
import { ComponentesModule } from '../../componentes/componentes.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerrosPageRoutingModule,
    PipesModule,
    ComponentesModule,
    RouterModule.forChild([{ path: '', component: PerrosPage }])
  ], 
  declarations: [PerrosPage]
})
export class PerrosPageModule {}
