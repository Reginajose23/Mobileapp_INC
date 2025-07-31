import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddshortsPage } from './addshorts.page';

const routes: Routes = [
  {
    path: '',
    component: AddshortsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddshortsPageRoutingModule {}
