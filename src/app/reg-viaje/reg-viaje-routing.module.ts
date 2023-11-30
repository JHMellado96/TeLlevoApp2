import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegViajePage } from './reg-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: RegViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegViajePageRoutingModule {}
