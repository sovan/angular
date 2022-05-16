import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';

import { CommonModule } from '@angular/common';
import { DropdownModule } from 'projects/dropdown/src/public-api';


@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
