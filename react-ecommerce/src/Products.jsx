import React from 'react';
import Product from './Product';
const Products = ({products,addToCart}) => {
  return (
    // Container For All Products
    <div className="container mb-5">
        <div className="row">
            {
                products.map((product)=> (
                    <Product product={product} addToCart={addToCart}/>
                ))
            }
        </div>
    </div>
    //Container For All Products End
  )
}

export default Products;
