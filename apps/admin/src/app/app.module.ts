import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MaterialModule } from '@cleric-eshop/material';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroModule } from '@cleric-eshop/ng-zorro';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminUiModule } from '@cleric-eshop/admin-ui';
import { RootComponent } from './pages/root/root.component';
import { LoginComponent } from './pages/login/login.component';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent, RootComponent, LoginComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AdminUiModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }],
  bootstrap: [AppComponent],
})
export class AppModule {}
