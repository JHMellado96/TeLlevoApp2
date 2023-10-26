import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesocliPageRoutingModule } from './accesocli-routing.module';

import { AccesocliPage } from './accesocli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesocliPageRoutingModule
  ],
  declarations: [AccesocliPage]
})
export class AccesocliPageModule {}
