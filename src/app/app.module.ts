import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service';
import { ModalModule } from './modal/modal.module';
import { CreatePageModule } from './create-page/create-page.module';

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
    CreatePageModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
