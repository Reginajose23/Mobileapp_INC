import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddchurchPage } from './addchurch.page';

const routes: Routes = [
  {
    path: '',
    component: AddchurchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddchurchPageRoutingModule {}
