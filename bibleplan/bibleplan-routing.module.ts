import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibleplanPage } from './bibleplan.page';

const routes: Routes = [
  {
    path: '',
    component: BibleplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibleplanPageRoutingModule {}
