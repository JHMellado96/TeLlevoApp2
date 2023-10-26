import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesocliPage } from './accesocli.page';

const routes: Routes = [
  {
    path: '',
    component: AccesocliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesocliPageRoutingModule {}
