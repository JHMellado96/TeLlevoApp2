import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevViajePage } from './rev-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: RevViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevViajePageRoutingModule {}
