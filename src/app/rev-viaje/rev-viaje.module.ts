import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevViajePageRoutingModule } from './rev-viaje-routing.module';

import { RevViajePage } from './rev-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevViajePageRoutingModule
  ],
  declarations: [RevViajePage]
})
export class RevViajePageModule {}
