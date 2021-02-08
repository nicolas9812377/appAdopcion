import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'carga',   
    pathMatch: 'full'
  },
  {
    path: 'carga',
    loadChildren: () => import('./paginas/carga/carga.module').then( m => m.CargaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./paginas/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'fundaciones',
    loadChildren: () => import('./paginas/fundaciones/fundaciones.module').then( m => m.FundacionesPageModule)
  },
  {
    path: 'perros-por-fundacion',
    loadChildren: () => import('./paginas/perros-por-fundacion/perros-por-fundacion.module').then( m => m.PerrosPorFundacionPageModule)
  }, 
];


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
