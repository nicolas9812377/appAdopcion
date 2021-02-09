import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundacionesPageRoutingModule } from './fundaciones-routing.module';

import { FundacionesPage } from './fundaciones.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundacionesPageRoutingModule,
    PipesModule,
    ComponentesModule
  ],
  declarations: [FundacionesPage]
})
export class FundacionesPageModule {}
