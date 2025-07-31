import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPrayerPageRoutingModule } from './show-prayer-routing.module';

import { ShowPrayerPage } from './show-prayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPrayerPageRoutingModule
  ],
  declarations: [ShowPrayerPage]
})
export class ShowPrayerPageModule {}
