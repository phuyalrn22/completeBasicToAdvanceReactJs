import React, { useContext } from 'react';
import { ProductContent } from './context/ProductContext';
import {Link} from 'react-router-dom';
const Product = ({product}) => {
//    const product = props.product;
  const {addToCart} = useContext(ProductContent);
  return (
   <Link to={`/details/${product.id}`}>
    <div className="col-md-4">
        <div className="card product mt-3">
            <div className="product1 align-items-center p-2 text-center">
                <img src={product.thumbnail} alt="laptop" className="rounded" width="160"/>
                <h5>{product.name}</h5>
                <div className="info mt3">
                    <span className="text1 d-block">{product.description}</span>
                </div>
                <div className="cost mt-3 text-dark">
                    <span>Rs.{product.price}</span>
                    <s><span>Rs.{product.oldPrice}</span></s>
                    <div className="star mt-3 align-items-center">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            <button className="p-3 shoe text-center text-white mt-3-cursor btn-success" onClick={()=>addToCart(product)}>
                <span className="text-uppercase">
                    Add to cart
                </span>
            </button>
        </div>
    </div>
   </Link> 

  );
}

export default Product;
