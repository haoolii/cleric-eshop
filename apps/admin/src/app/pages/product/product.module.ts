import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from '@cleric-eshop/ng-zorro';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductCategoryComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    NgZorroModule
  ]
})
export class ProductModule { }
