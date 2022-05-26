import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';

import { CommonModule } from '@angular/common';
import { GridModule } from 'projects/grid/src/public-api';
import { FormModule } from 'projects/form/src/public-api';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    FormModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
