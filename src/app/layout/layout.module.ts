import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';

import { CommonModule } from '@angular/common';
import { GridModule } from '../grid/grid.module';
import { FormModule } from '../form/form.module';



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
