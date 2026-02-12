import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { cartPersistenceMiddleware } from "../middleware/cartPersistenceMiddleware";

const CART_STORAGE_KEY = "mini-cart-pro-cart";

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

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadCartFromStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartPersistenceMiddleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
