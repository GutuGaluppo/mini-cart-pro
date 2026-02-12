import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartItem } from "./cartTypes";

/**
 * Estado inicial do carrinho.
 *
 * - items normalizado em Record
 * - status preparado para sync futuro
 */
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
    /**
     * Adiciona produto ao carrinho.
     *
     * - Se já existir → incrementa
     * - Se não → cria novo item
     * - priceAtAddition é definido apenas na primeira inserção
     */
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

    /**
     * Remove item completamente do carrinho.
     */
    removeFromCart(state, action: PayloadAction<string>) {
      delete state.items[action.payload];
    },

    /**
     * Atualiza quantidade manualmente.
     * Se quantity <= 0 → remove item.
     */
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

    /**
     * Limpa completamente o carrinho.
     */
    clearCart(state) {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
