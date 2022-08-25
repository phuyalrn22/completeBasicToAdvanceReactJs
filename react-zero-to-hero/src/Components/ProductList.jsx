import React from "react";
//import Products from "./Products";
import { ProductContent } from "../context/ProductContext";

const ProductList = () => {
  const  { cart } = useContext(ProductContent);
  const cartList = cart.map((carts) =>  carts)
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src={cartList.thumbnail}
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
