import type { Middleware } from "@reduxjs/toolkit";
import type { RootState } from "../app/rootReducer";

const CART_STORAGE_KEY = "mini-cart-pro-cart";

/**
 * Middleware responsável por persistir o carrinho.
 *
 * - Observa todas as actions
 * - Executa após reducer
 * - Não polui o slice
 */
export const cartPersistenceMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);

    const state = store.getState();
    const cartState = state.cart;

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));

    return result;
  };
