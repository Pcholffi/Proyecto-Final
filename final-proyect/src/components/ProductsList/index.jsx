import React from "react";
import CardProduct from "./CardProduct";

const ProductList = ({ title, products, cart, setCart }) => {
  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">{title} - {cart.length}</h2>
        </div>
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <CardProduct
              key={product._id}
              product={product}
              setCart={setCart}
              cart={cart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
