import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerseuploadPageRoutingModule } from './verseupload-routing.module';

import { VerseuploadPage } from './verseupload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerseuploadPageRoutingModule
  ],
  declarations: [VerseuploadPage]
})
export class VerseuploadPageModule {}
