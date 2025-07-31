import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddshortsPageRoutingModule } from './addshorts-routing.module';

import { AddshortsPage } from './addshorts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddshortsPageRoutingModule
  ],
  declarations: [AddshortsPage]
})
export class AddshortsPageModule {}
