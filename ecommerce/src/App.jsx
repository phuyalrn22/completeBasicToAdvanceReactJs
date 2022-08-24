import React, { useContext } from "react";
import { ProductContent } from "./context/ProductContext";
import Products from "./Products";

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
