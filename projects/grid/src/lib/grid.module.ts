import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { CommonModule } from '@angular/common';
import { FormModule } from 'projects/form/src/public-api';


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
