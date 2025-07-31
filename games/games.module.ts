import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesPageRoutingModule } from './games-routing.module';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

import { GamesPage } from './games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [GamesPage]
})
export class GamesPageModule {}
