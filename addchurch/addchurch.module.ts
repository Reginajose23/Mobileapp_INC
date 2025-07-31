import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddchurchPageRoutingModule } from './addchurch-routing.module';

import { AddchurchPage } from './addchurch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddchurchPageRoutingModule
  ],
  declarations: [AddchurchPage]
})
export class AddchurchPageModule {}
