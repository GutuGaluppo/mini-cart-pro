import { useEffect } from "react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { fetchProducts } from "./features/products/productThunks";
import { addToCart } from "./features/cart/cartSlice";
import { selectAllProducts } from "./features/products/productSelectors";

export function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Mini Cart Pro</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>

          <button
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
  );
}
