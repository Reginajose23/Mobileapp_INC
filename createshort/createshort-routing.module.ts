import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateshortPage } from './createshort.page';

const routes: Routes = [
  {
    path: '',
    component: CreateshortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateshortPageRoutingModule {}
