import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://62bd8db5c5ad14c110c16cc2.mockapi.io/product",
        {
          method: "get",
        }
      );
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container mb-5">
      <div className="row">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
