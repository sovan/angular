import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { CommonModule } from '@angular/common';
import { FormModule } from '../form/form.module';


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    FormModule
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
