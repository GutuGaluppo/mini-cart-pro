import type { Middleware } from "@reduxjs/toolkit";
import type { RootState } from "../app/rootReducer";

const CART_STORAGE_KEY = "mini-cart-pro-cart";

export const cartPersistenceMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);

    const state = store.getState();
    const cartState = state.cart;

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));

    return result;
  };
