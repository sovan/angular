import { NgModule } from '@angular/core';
import { CreatePageComponent } from './create-page.component';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule
  ],
  exports: [
    CreatePageComponent
  ]
})
export class CreatePageModule { }
