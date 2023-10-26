import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesoadmPage } from './accesoadm.page';

const routes: Routes = [
  {
    path: '',
    component: AccesoadmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesoadmPageRoutingModule {}
