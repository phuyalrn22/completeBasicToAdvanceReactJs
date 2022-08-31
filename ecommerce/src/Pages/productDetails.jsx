import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://62bd8db5c5ad14c110c16cc2.mockapi.io/product/${id}`,
        {
          method: "get",
        }
      );
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(product);
  return <div>{product.name}</div>;
};

export default ProductDetails;
