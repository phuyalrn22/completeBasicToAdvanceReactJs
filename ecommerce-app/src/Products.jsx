import Product from "./Product";
import React from "react";
const Products = ({products, addToCart}) => {
  return (
    <div className="container mb-5">
      <div className="row">
        {products.map((product) => (
          <Product product={product} addToCart = {addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
