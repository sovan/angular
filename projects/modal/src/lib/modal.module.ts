import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';

import { LayoutModule } from 'projects/layout/src/public-api';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
