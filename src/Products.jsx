import React, { useContext, useEffect, useState } from "react";
import { ProductContent } from "./context/ProductContext";
import Product from "./Product";

const Products = ({}) => {
  const { products } = useContext(ProductContent);

  return (
    <div className="container mb-5">
      <div className="row">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
