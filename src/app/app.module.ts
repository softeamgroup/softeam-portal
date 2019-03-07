import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './shared/navs/app-menu.component';
import { UserModule } from './modules/user/user.module';
import { HomePageComponent } from './modules/home/home-page.component';
import { PageNotFoundComponent } from './shared/pageNotFound/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
