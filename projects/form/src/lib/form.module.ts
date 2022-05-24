import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
