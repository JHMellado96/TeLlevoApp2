import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accesocli',
    loadChildren: () => import('./accesocli/accesocli.module').then( m => m.AccesocliPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'accesoadm',
    loadChildren: () => import('./accesoadm/accesoadm.module').then( m => m.AccesoadmPageModule)
  },
  {
    path: 'menucli',
    loadChildren: () => import('./menucli/menucli.module').then( m => m.MenucliPageModule)
  },
  {
    path: 'menuadm',
    loadChildren: () => import('./menuadm/menuadm.module').then( m => m.MenuadmPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
