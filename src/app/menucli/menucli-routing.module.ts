import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenucliPage } from './menucli.page';

const routes: Routes = [
  {
    path: '',
    component: MenucliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenucliPageRoutingModule {}
