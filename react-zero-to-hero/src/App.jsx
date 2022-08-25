import React, { useContext } from "react";
import { ProductContent } from "./context/ProductContext";
import Products from "./Components/Products";
import ProductList from "./Components/ProductList";

const App = () => {
  const { cart } = useContext(ProductContent);

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <div>
            Cart <span>{cart.length}</span>
          </div>
        </div>
      </nav>
      <Products />
      <hr/>
      <ProductList />
    </> 
  );
};

export default App;