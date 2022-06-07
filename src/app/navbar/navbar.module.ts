import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';

import { CommonModule } from '@angular/common';
import { DropdownModule } from '../dropdown/dropdown.module';


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
