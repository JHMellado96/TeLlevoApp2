import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenucliPageRoutingModule } from './menucli-routing.module';

import { MenucliPage } from './menucli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenucliPageRoutingModule
  ],
  declarations: [MenucliPage]
})
export class MenucliPageModule {}
