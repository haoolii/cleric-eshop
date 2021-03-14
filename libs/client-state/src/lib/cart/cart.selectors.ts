import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CART_FEATURE_KEY,
  State,
  CartPartialState,
  cartAdapter,
} from './cart.reducer';

// Lookup the 'Cart' feature state managed by NgRx
export const getCartState = createFeatureSelector<CartPartialState, State>(
  CART_FEATURE_KEY
);

const { selectAll, selectEntities } = cartAdapter.getSelectors();

export const getCartLoaded = createSelector(
  getCartState,
  (state: State) => state.loaded
);

export const getCartError = createSelector(
  getCartState,
  (state: State) => state.error
);

export const getAllCart = createSelector(getCartState, (state: State) =>
  selectAll(state)
);

export const getCartEntities = createSelector(getCartState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getCartState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getCartEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
