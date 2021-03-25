import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from '@cleric-eshop/ng-zorro';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [OrderComponent, OrderListComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NgZorroModule
  ]
})
export class OrderModule { }
