import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./productTypes";
import { fetchProducts } from "./productThunks";

type ProductState = {
  items: Record<string, Product>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: ProductState = {
  items: {},
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          action.payload.forEach((product) => {
            state.items[product.id] = product;
          });
        },
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch products";
      });
  },
});

export const productReducer = productSlice.reducer;
