import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateshortPageRoutingModule } from './createshort-routing.module';

import { CreateshortPage } from './createshort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateshortPageRoutingModule
  ],
  declarations: [CreateshortPage]
})
export class CreateshortPageModule {}
