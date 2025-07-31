import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizePageRoutingModule } from './quize-routing.module';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

import { QuizePage } from './quize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizePageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [QuizePage]
})
export class QuizePageModule {}
