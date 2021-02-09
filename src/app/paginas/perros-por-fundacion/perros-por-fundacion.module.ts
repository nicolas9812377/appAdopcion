import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerrosPorFundacionPageRoutingModule } from './perros-por-fundacion-routing.module';

import { PerrosPorFundacionPage } from './perros-por-fundacion.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerrosPorFundacionPageRoutingModule,
    PipesModule,
    ComponentesModule
  ],
  declarations: [PerrosPorFundacionPage]
})
export class PerrosPorFundacionPageModule {}
