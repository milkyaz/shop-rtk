import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGoods } from "./shopSlice";

export const ShopView = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoods());
  }, []);
  return (
    <div>
      <h2>List of Shop</h2>
      {product.loading && <div>Loading...</div>}
      {!product.loading && product.error ? (
        <div>Error: {product.error}</div>
      ) : null}
      {!product.loading && product.shop.length ? (
        <ul>
          {product.shop.map((item) => (
            <>
              <div key={item.id}>
                <li>{item.title}</li>
                <li>{item.price}</li>
              </div>
            </>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
