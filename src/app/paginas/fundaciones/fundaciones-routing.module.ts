import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundacionesPage } from './fundaciones.page';

const routes: Routes = [
  {
    path: '',
    component: FundacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundacionesPageRoutingModule {}
