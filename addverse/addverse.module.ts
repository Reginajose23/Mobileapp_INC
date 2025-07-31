import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddversePageRoutingModule } from './addverse-routing.module';

import { AddversePage } from './addverse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddversePageRoutingModule
  ],
  declarations: [AddversePage]
})
export class AddversePageModule {}
