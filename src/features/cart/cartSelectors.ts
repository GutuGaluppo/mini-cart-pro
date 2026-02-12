import type { RootState } from "../../app/rootReducer";

export const selectCartState = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartStatus = (state: RootState) => state.cart.status;

// DERIVED STATE

// TOTAL ITEMS IN CART
export const selectTotalItems = (state: RootState) =>
  Object.values(state.cart.items).reduce(
    (total, item) => total + item.quantity,
    0,
  );

// TOTAL PRICE IN CART
export const selectCartTotal = (state: RootState) =>
  Object.values(state.cart.items).reduce(
    (total, item) => total + item.quantity * item.priceAtAddition,
    0,
  );
