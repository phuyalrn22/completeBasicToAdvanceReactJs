import React from 'react';
import Product from './Product';
import { useState,useEffect} from 'react';

const Products = () => {
    const [products,setProducts] = useState([]);
    const fetchData = async()=>{
        try{
          const response= await fetch("https://62bd8db5c5ad14c110c16cc2.mockapi.io/product",
            {
              method:"get",
            });
          const data = await response.json();
          setProducts(data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
  return (
    // Container For All Products
    <div className="container mb-5">
        <div className="row" id="productRow">
            {
                products.map((product)=> (
                    <Product product={product} />
                ))
            }
        </div>
    </div>
    //Container For All Products End
  )
}

export default Products;
