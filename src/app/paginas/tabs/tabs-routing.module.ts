import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'fundaciones',
        loadChildren: '../fundaciones/fundaciones.module#FundacionesPageModule'
      },
      {
        path: 'perros',
        loadChildren: '../perros/perros.module#PerrosPageModule'
      },
      {
        path: '',
        loadChildren: '../perros/perros.module#PerrosPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
