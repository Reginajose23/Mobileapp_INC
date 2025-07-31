import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowFeedbackPage } from './show-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: ShowFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowFeedbackPageRoutingModule {}
