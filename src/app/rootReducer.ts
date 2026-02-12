import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "../features/cart/cartSlice";
import { productReducer } from "../features/products/productSlice";

/**
 * Root reducer centralizado.
 *
 * Separar o rootReducer do store:
 * - Facilita SSR (Next.js no futuro)
 * - Permite dynamic reducer injection
 * - Mantém organização arquitetural
 */
export const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

/**
 * RootState é derivado automaticamente.
 * Nunca definimos manualmente.
 * Isso evita inconsistência.
 */
export type RootState = ReturnType<typeof rootReducer>;
