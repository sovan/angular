import { NgModule } from '@angular/core';
import { CreatePageComponent } from './create-page.component';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CreatePageComponent
  ]
})
export class CreatePageModule { }
