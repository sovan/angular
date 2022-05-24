import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
