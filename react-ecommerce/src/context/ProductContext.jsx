import React, { createContext } from 'react'
import { useState, useEffect } from 'react';
export const ProductContent = createContext();
  const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://62bd8db5c5ad14c110c16cc2.mockapi.io/product",
        {
          method: "get",
        }
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addToCart = (product) => {
    const exists = cart.filter((x)=> x.id===product.id).length>0;
    if(exists){
      const newcart = cart.filter((x)=>x.id!==product.id);
      setCart(newcart);
    }else{
      setCart([...cart, product]);
    }
  };
  return (
    <ProductContent.Provider value={{products,addToCart,cart}}>
      {children}
    </ProductContent.Provider>
  )
}

export default ProductProvider;
