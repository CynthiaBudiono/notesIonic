import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailnotePage } from './detailnote.page';

const routes: Routes = [
  {
    path: '',
    component: DetailnotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailnotePageRoutingModule {}
