import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowFeedbackPageRoutingModule } from './show-feedback-routing.module';

import { ShowFeedbackPage } from './show-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowFeedbackPageRoutingModule
  ],
  declarations: [ShowFeedbackPage]
})
export class ShowFeedbackPageModule {}
