import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "../features/cart/cartSlice";

export const rootReducer = combineReducers({
  cart: cartReducer,
  // products: productReducer,
  // auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
