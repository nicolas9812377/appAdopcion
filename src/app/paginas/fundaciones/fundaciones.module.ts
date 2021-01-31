import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundacionesPageRoutingModule } from './fundaciones-routing.module';

import { FundacionesPage } from './fundaciones.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundacionesPageRoutingModule,
    PipesModule
  ],
  declarations: [FundacionesPage]
})
export class FundacionesPageModule {}
