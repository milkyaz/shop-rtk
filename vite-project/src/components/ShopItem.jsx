import { useSelector } from "react-redux";
import { useState } from "react";

function ShopItem() {
  const product = useSelector((state) => state.product);
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
                <img style={{ width: "10%" }} src={item.image} alt="dw" />
                <li>{item.price}</li>
              </div>
            </>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export { ShopItem };
