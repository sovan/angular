import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
