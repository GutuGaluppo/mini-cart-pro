import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartItem } from "./cartTypes";

const initialState: CartState = {
  items: {},
  status: "idle",
  lastSyncedAt: null,
};

type AddToCartPayload = {
  productId: string;
  price: number;
};

type UpdateQuantityPayload = {
  productId: string;
  quantity: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<AddToCartPayload>) {
      const { productId, price } = action.payload;

      const existingItem = state.items[productId];

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem: CartItem = {
          productId,
          quantity: 1,
          priceAtAddition: price,
        };

        state.items[productId] = newItem;
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      delete state.items[action.payload];
    },

    updateQuantity(state, action: PayloadAction<UpdateQuantityPayload>) {
      const { productId, quantity } = action.payload;

      const item = state.items[productId];
      if (!item) return;

      if (quantity <= 0) {
        delete state.items[productId];
      } else {
        item.quantity = quantity;
      }
    },

    clearCart(state) {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
