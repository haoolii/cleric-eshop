import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';

@NgModule({
  imports: [CommonModule, BreadcrumbModule],
  declarations: [],
  exports: [BreadcrumbModule]
})
export class ClientUiModule {}
