import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailnotePageRoutingModule } from './detailnote-routing.module';

import { DetailnotePage } from './detailnote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailnotePageRoutingModule
  ],
  declarations: [DetailnotePage]
})
export class DetailnotePageModule {}
