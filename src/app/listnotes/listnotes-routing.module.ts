import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListnotesPage } from './listnotes.page';

const routes: Routes = [
  {
    path: '',
    component: ListnotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListnotesPageRoutingModule {}
