import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as CartActions from './cart.actions';
import { CartEntity } from './cart.models';

export const CART_FEATURE_KEY = 'cart';

export interface State extends EntityState<CartEntity> {
  selectedId?: string | number; // which Cart record has been selected
  loaded: boolean; // has the Cart list been loaded
  error?: string | null; // last known error (if any)
}

export interface CartPartialState {
  readonly [CART_FEATURE_KEY]: State;
}

export const cartAdapter: EntityAdapter<CartEntity> = createEntityAdapter<CartEntity>();

export const initialState: State = cartAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const cartReducer = createReducer(
  initialState,
  on(CartActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(CartActions.loadCartSuccess, (state, { cart }) =>
    cartAdapter.setAll(cart, { ...state, loaded: true })
  ),
  on(CartActions.loadCartFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}
