import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowVersePage } from './show-verse.page';

const routes: Routes = [
  {
    path: '',
    component: ShowVersePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowVersePageRoutingModule {}
