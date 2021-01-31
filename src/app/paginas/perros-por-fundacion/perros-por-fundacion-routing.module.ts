import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerrosPorFundacionPage } from './perros-por-fundacion.page';

const routes: Routes = [
  {
    path: '',
    component: PerrosPorFundacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerrosPorFundacionPageRoutingModule {}
