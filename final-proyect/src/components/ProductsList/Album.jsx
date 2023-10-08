import React from "react";
import CardProduct from "./CardProduct";

const Album = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
