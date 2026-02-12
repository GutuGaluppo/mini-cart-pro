import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../services/productService";
import type { Product } from "./productTypes";

/**
 * Thunk responsável por buscar produtos.
 *
 * Separação:
 * - Thunk orquestra
 * - Service executa
 */
export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    return await productService.fetchProducts();
  } catch {
    return rejectWithValue("Failed to fetch products");
  }
});
