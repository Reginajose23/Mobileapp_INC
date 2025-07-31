import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyversePageRoutingModule } from './dailyverse-routing.module';

import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

import { DailyversePage } from './dailyverse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyversePageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [DailyversePage]
})
export class DailyversePageModule {}
