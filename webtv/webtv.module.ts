import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebtvPageRoutingModule } from './webtv-routing.module';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

import { WebtvPage } from './webtv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebtvPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [WebtvPage]
})
export class WebtvPageModule {}
