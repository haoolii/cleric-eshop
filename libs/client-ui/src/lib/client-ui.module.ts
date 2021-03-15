import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  imports: [CommonModule, BreadcrumbModule, ModalModule],
  declarations: [],
  exports: [BreadcrumbModule]
})
export class ClientUiModule {}
