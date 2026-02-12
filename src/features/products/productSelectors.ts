import type { RootState } from "../../app/rootReducer";

export const selectProductById = (productId: string) => (state: RootState) =>
  state.products.items[productId];

export const selectAllProducts = (state: RootState) =>
  Object.values(state.products.items);
