import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesoadmPageRoutingModule } from './accesoadm-routing.module';

import { AccesoadmPage } from './accesoadm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesoadmPageRoutingModule
  ],
  declarations: [AccesoadmPage]
})
export class AccesoadmPageModule {}
