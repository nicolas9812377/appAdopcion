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
  {
    path: 'perros',
    loadChildren: () => import('./paginas/perros/perros.module').then( m => m.PerrosPageModule)
  },
  {
    path: 'adoptar',
    loadChildren: () => import('./paginas/adoptar/adoptar.module').then( m => m.AdoptarPageModule)
  },  {
    path: 'tabs',
    loadChildren: () => import('./paginas/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./paginas/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'configuraciones',
    loadChildren: () => import('./paginas/configuraciones/configuraciones.module').then( m => m.ConfiguracionesPageModule)
  },

  


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 