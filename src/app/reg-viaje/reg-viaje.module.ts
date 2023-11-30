import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegViajePageRoutingModule } from './reg-viaje-routing.module';

import { RegViajePage } from './reg-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegViajePageRoutingModule
  ],
  declarations: [RegViajePage]
})
export class RegViajePageModule {}
