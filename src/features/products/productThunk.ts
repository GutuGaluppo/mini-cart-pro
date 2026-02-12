import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../services/productService";
import type { Product } from "./productTypes";

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const products = await productService.fetchProducts();
    return products;
  } catch (error) {
    return rejectWithValue(error.message || "Failed to fetch products");
  }
});
