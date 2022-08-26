import React, { useContext } from "react";
import Products from "./Products";
import {ProductProvider, ProductContent } from "./context/ProductContext";

const App = () => {
  const {cart,addToCart} = useContext(ProductContent);
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
      <div className="container">
        <div>Card List</div>
        {
          cart.map((c)=>(
            <>
             <div className="row d-flex" style={{width:"100%",
            display:"flex",
            justifyContent:"space-around",
            margin:"10px"}}>
              <img src={c.thumbnail} style={{height:"50px", width:"50px"}} alt="" />
              <div style={{width:"auto"}}>{c.name}</div>
              <button style={{width:"auto"}} onClick={()=> addToCart(c)}>Remove from Cart</button>
             </div>
            </>
          ))
        }
      </div>
    </>
  );
};

export default App;
