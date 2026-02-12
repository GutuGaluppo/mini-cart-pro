import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { addToCart } from "./features/cart/cartSlice";
import {
  selectCartItems,
  selectCartTotal,
  selectTotalItems,
} from "./features/cart/cartSelectors";

export function App() {
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const totalItems = useAppSelector(selectTotalItems);

  return (
    <div>
      <h1>Mini Cart Pro</h1>
      <div>
        <button
          onClick={() => dispatch(addToCart({ productId: "1", price: 100 }))}
        >
          Add Product 1
        </button>

        <button
          onClick={() => dispatch(addToCart({ productId: "2", price: 200 }))}
        >
          Add Product 2
        </button>
        <button
          onClick={() => dispatch(addToCart({ productId: "3", price: 300 }))}
        >
          Add Product 3
        </button>
      </div>

      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${total.toFixed(2)}</p>

      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
}
