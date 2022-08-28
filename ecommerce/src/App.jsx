import React, { useContext } from "react";
import { ProductContent } from "./context/ProductContext";
import Products from "./Products";

const App = () => {
  const { cart, addToCart } = useContext(ProductContent);

  return (
    <>
      <Products />
      <div className="container">
        <div>Cart List</div>
        {cart.map((c) => (
          <div
            className="row d-flex"
            style={{
              margin: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <img
              src={c.thumbnail}
              style={{ height: "50px", width: "50px" }}
              alt=""
              srcset=""
            />
            <div style={{ width: "auto" }}>{c.name}</div>
            <button style={{ width: "auto" }} onClick={() => addToCart(c)}>
              Remove from cart
            </button>
          </div>
        ))}
      </div>
    </>
  );

  // return (
  //   <>
  //     <List>
  //       <button>qst button</button>
  //       <button>second Button</button>
  //     </List>
  //     <List>
  //       <div
  //         style={{
  //           height: "200px",
  //           width: "200px",
  //           backgroundColor: "red",
  //           margin: "2px",
  //         }}
  //       ></div>
  //       <div
  //         style={{
  //           height: "200px",
  //           width: "200px",
  //           backgroundColor: "blue",
  //           margin: "2px",
  //         }}
  //       ></div>
  //     </List>
  // </>
  // );
};

export default App;
