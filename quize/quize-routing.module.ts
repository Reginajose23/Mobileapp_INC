import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizePage } from './quize.page';

const routes: Routes = [
  {
    path: '',
    component: QuizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizePageRoutingModule {}
