import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCart from './cart/cart.reducer';
import { CartEffects } from './cart/cart.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCart.CART_FEATURE_KEY, fromCart.reducer),
    EffectsModule.forFeature([CartEffects]),
  ],
})
export class ClientStateModule {}
