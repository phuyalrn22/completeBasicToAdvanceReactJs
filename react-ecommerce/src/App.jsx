import React, { useContext } from "react";
import Products from "./Products";
import {ProductProvider, ProductContent } from "./context/ProductContext";

const App = () => {
  const {cart} = useContext(ProductContent);
  return (
    <>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <div>
            Cart <span>{cart.length} </span>
          </div>
        </div>
      </nav>
      <Products/>
    </>
  );
};

export default App;
