import type { Product } from "../features/products/productTypes";

const mockProducts: Product[] = [
  {
    id: "1",
    title: "Mechanical Keyboard",
    description: "High performance mechanical keyboard",
    price: 120,
    image: "keyboard.jpg",
    stock: 10,
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Gaming Mouse",
    description: "Ergonomic gaming mouse",
    price: 60,
    image: "mouse.jpg",
    stock: 15,
    updatedAt: new Date().toISOString(),
  },
];

export const productService = {
  async fetchProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 1000);
    });
  },
};
