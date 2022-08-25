import React, { useContext } from 'react';
import { ProductContent } from './context/ProductContext';
import Product from './Product';
const Products = () => {
  const {products} = useContext(ProductContent);
  return (
    // Container For All Products
    <div className="container mb-5">
        <div className="row">
            {
                products.map((product)=> (
                    <Product product={product}/>
                ))
            }
        </div>
    </div>
    //Container For All Products End
  )
}

export default Products;
