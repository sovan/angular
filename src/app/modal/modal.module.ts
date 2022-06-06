import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../layout/layout.module';


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
