import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddvideoPageRoutingModule } from './addvideo-routing.module';

import { AddvideoPage } from './addvideo.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddvideoPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [AddvideoPage]
})
export class AddvideoPageModule {}
