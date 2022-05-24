import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';

import { CommonModule } from '@angular/common';
import { GridModule } from 'projects/grid/src/public-api';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    GridModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
