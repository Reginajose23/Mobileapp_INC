import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddversePage } from './addverse.page';

const routes: Routes = [
  {
    path: '',
    component: AddversePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddversePageRoutingModule {}
