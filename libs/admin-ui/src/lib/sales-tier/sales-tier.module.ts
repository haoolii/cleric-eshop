import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from '@cleric-eshop/ng-zorro';
import { SalesTierSpecComponent } from './sales-tier-spec/sales-tier-spec.component';
import { SalesTierGridComponent } from './sales-tier-grid/sales-tier-grid.component';



@NgModule({
  declarations: [SalesTierSpecComponent, SalesTierGridComponent],
  imports: [
    CommonModule,
    NgZorroModule,
    ReactiveFormsModule
  ],
  exports: [SalesTierSpecComponent, SalesTierGridComponent]
})
export class SalesTierModule { }
