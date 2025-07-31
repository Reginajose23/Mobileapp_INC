import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerseuploadPage } from './verseupload.page';

const routes: Routes = [
  {
    path: '',
    component: VerseuploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerseuploadPageRoutingModule {}
