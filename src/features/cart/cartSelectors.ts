import type { RootState } from "../../app/rootReducer";

/**
 * Selector base do cart.
 */
export const selectCartState = (state: RootState) => state.cart;

/**
 * Retorna itens normalizados.
 */
export const selectCartItems = (state: RootState) => state.cart.items;

/**
 * Derived state → total de itens.
 */
export const selectTotalItems = (state: RootState) =>
  Object.values(state.cart.items).reduce(
    (total, item) => total + item.quantity,
    0,
  );

/**
 * Derived state → total monetário.
 */
export const selectCartTotal = (state: RootState) =>
  Object.values(state.cart.items).reduce(
    (total, item) => total + item.quantity * item.priceAtAddition,
    0,
  );
