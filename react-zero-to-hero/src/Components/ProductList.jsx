import React from "react";
//import Products from "./Products";
import { ProductContent } from "../context/ProductContext";

const ProductList = ({ products }) => {
  const  { products } = useContext(ProductContent);
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src={products.thumbnail}
              alt="laptop"
              className="rounded"
              width="160"
            /> 
          </div>
          <div>Product name</div>
          <div>
            <p>Price</p>
          </div>

          <div>
            <i class="bi bi-x"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
