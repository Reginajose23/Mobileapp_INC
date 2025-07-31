import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowVersePageRoutingModule } from './show-verse-routing.module';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { ShowVersePage } from './show-verse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowVersePageRoutingModule,
    SharedmoduleModule  ],
  declarations: [ShowVersePage]
})
export class ShowVersePageModule {}
