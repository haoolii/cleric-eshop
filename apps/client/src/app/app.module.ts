import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ClientUiModule } from '@cleric-eshop/client-ui';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent, HomeComponent } from './pages';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { MainContentComponent } from './pages/main-content/main-content.component';

@NgModule({
  declarations: [AppComponent, RootComponent, HomeComponent, AboutComponent, LoginComponent, FooterComponent, HeaderComponent, ProductsComponent, ContactComponent, CartComponent, MainContentComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ClientUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
