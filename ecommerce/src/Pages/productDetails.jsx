import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const query = useParams();
  console.log(query);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
