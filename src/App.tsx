import { useEffect } from "react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
// import { addToCart } from "./features/cart/cartSlice";
// import {
//   selectCartItems,
//   selectCartTotal,
//   selectTotalItems,
// } from "./features/cart/cartSelectors";
import { fetchProducts } from "./features/products/productThunk";

export function App() {
  const dispatch = useAppDispatch();
  const products = useAppDispatch((state) => state.products);
  const { items, status, error } = useAppSelector((state) => state.products);

  // const items = useAppSelector(selectCartItems);
  // const total = useAppSelector(selectCartTotal);
  // const totalItems = useAppSelector(selectTotalItems);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Mini Cart Pro</h1>

      <pre>{JSON.stringify(products, null, 2)}</pre>

      <p>Status: {status}</p>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      {status === "succeeded" &&
        Object.values(items).map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}

      {/*<div>
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
      </div>*/}
    </div>
  );
}
