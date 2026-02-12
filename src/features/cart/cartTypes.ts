type CartItem = {
  productId: string;
  quantity: number;
  priceAtAddition: number; // To update price if backend price changes
};

type CartState = {
  items: Record<string, CartItem>;
  status: "idle" | "syncing" | "error";
  lastSyncedAt: string | null;
};
