import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { cartPersistenceMiddleware } from "../middleware/cartPersistenceMiddleware";

/**
 * Chave única para persistência do carrinho.
 */
const CART_STORAGE_KEY = "mini-cart-pro-cart";

/**
 * Responsável por hidratar o estado inicial do cart.
 *
 * - Executa apenas na criação da store
 * - Não é responsabilidade do slice
 * - Evita ação artificial de hydrate
 */
function loadCartFromStorage() {
  try {
    const serializedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (!serializedCart) return undefined;

    return {
      cart: JSON.parse(serializedCart),
    };
  } catch (error) {
    console.warn("Failed to load cart from storage", error);
    return undefined;
  }
}

/**
 * Store configurada com:
 * - Root reducer
 * - Preloaded state (hidratação)
 * - Middleware custom
 */
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadCartFromStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartPersistenceMiddleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
