import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';

import { CommonModule } from '@angular/common';
import { GridModule } from 'projects/grid/src/public-api';
import { FormModule } from 'projects/form/src/public-api';
import { TabmenuModule } from 'projects/tabmenu/src/public-api';
import { BreadcrumbModule } from 'projects/breadcrumb/src/public-api';
import { PaginationModule } from 'projects/pagination/src/public-api';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    FormModule,
    TabmenuModule,
    BreadcrumbModule,
    PaginationModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
