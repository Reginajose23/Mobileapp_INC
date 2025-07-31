import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrayerPageRoutingModule } from './prayer-routing.module';

import { PrayerPage } from './prayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PrayerPageRoutingModule
  ],
  declarations: [PrayerPage],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrayerPageModule {}
