import React, { createContext, useContext, useEffect, useState } from "react";

export const ProductContent = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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

  const addToCart = (product) => {
    const exists = cart.filter((x) => x.id === product.id).length > 0;
    if (exists) {
      const newCart = cart.filter((x) => x.id !== product.id);
      setCart(newCart);
    } else {
      setCart([...cart, product]);
      console.log(cart);
    }
  };
  return (
    <ProductContent.Provider value={{ products, addToCart, cart }}>
      {children}
    </ProductContent.Provider>
  );
};

export default ProductProvider;
