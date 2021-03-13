import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent, HomeComponent } from './pages';
import { ClientUiModule } from '@cleric-eshop/client-ui';
@NgModule({
  declarations: [AppComponent, RootComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ClientUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
