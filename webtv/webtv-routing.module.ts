import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebtvPage } from './webtv.page';

const routes: Routes = [
  {
    path: '',
    component: WebtvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebtvPageRoutingModule {}
