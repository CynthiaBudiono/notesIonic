import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListnotesPageRoutingModule } from './listnotes-routing.module';

import { ListnotesPage } from './listnotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListnotesPageRoutingModule
  ],
  declarations: [ListnotesPage]
})
export class ListnotesPageModule {}
