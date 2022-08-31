import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ProductContent } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const {addToCart} = useContext(ProductContent)
  const [product, setProduct] = useState([]);
  const {id} = useParams();
  const fetchData = async () => {
    try{
      const res = await fetch(`https://62bd8db5c5ad14c110c16cc2.mockapi.io/product/${id}`,{
      method: "get",
      });
      const data  = await res.json();
      setProduct(data);
    }
    catch(err){
      // console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [])
  return(
  <>
   <div className="d-flex justify-content-center container mt-5">
        <div className="card p-3 bg-light">
            <div className="about-product text-center mt-2"><img src={product.avatar} width="300" /> <img src={product.thumbnail} width="300" />
                <div>
                    <h4>{product.name}</h4>
                    <h4>{product.email}</h4>
                    <h6 className="mt-0 text-black-50">{product.description}</h6>
                </div>
            </div>
            <div className="stats mt-2">
              <div className="d-flex justify-content-between"><span>New Price</span><span>{product.price}</span></div>
              <div className="d-flex justify-content-between"><span>Old Price</span><span>{product.oldPrice}</span></div>
            </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Created At</span><span>{product.createdAt}</span></div>
            <button
            className="p-3 shoe text-center text-white mt-3-cursor btn-success "
            onClick={() => addToCart(product)}
          >
            <span className="text-uppercase">Add to cart</span>
          </button>
        </div>
    </div>
  </ >
  )
};

export default ProductDetails;
