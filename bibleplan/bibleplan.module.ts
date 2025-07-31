import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibleplanPageRoutingModule } from './bibleplan-routing.module';

import { BibleplanPage } from './bibleplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibleplanPageRoutingModule
  ],
  declarations: [BibleplanPage]
})
export class BibleplanPageModule {}
