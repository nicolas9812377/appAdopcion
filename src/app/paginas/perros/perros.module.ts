import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerrosPageRoutingModule } from './perros-routing.module';

import { PerrosPage } from './perros.page';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerrosPageRoutingModule,
    PipesModule
  ],
  declarations: [PerrosPage]
})
export class PerrosPageModule {}
