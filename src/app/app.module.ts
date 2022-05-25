import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarModule } from 'projects/navbar/src/public-api';
import { FooterModule } from 'projects/footer/src/public-api';
import { ModalModule } from 'projects/modal/src/public-api';
import { LayoutModule } from 'projects/layout/src/public-api';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service';

const routes: Routes = [{
  path: "**", component: AppComponent
}];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    FooterModule,
    ModalModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
