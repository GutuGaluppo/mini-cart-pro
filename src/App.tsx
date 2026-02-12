import { useEffect } from "react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { fetchProducts } from "./features/products/productThunks";
import { addToCart } from "./features/cart/cartSlice";
import { selectAllProducts } from "./features/products/productSelectors";
import {
  selectCartTotal,
  selectTotalItems,
} from "./features/cart/cartSelectors";

export function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const totalItems = useAppSelector(selectTotalItems);
  const total = useAppSelector(selectCartTotal);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="header">
        <h1>Mini Cart Pro</h1>
        <p>Arquitetura de estado profissional com Redux Toolkit</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>
              <strong>${product.price}</strong>
            </p>

            <button
              className="button"
              onClick={() =>
                dispatch(
                  addToCart({
                    productId: product.id,
                    price: product.price,
                  }),
                )
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${total}</p>
      </div>
    </div>
  );
}
