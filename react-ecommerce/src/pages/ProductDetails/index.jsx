import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Description from './components/Description';
import Review from './components/Review';
const ProductDetails = () => {
    const [product,setProduct] = useState({});
    const {id} = useParams();
    const fetchData = async () => {
        try {
          const response = await fetch(
            `https://62bd8db5c5ad14c110c16cc2.mockapi.io/product/${id}`,
            {
              method: "get",
            }
          );
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchData()
      }, []);
      const [showDescription, setShowDescription] = useState(true);
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={product.thumbnail} className="d-block w-100" alt="image"/>
                    </div>
                    <div className="carousel-item">
                        <img src={product.avatar} className="d-block w-100" alt="image"/>
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="col-md-7">
                <p className="newarrival text-center" 
                style={{
                    backgroundColor:"green",
                    color:"white",
                    width:"66px",
                    fontSize:"24px"
                    }}>NEW</p>
                <h1>{product.name}</h1>
                <h6>Created At: {product.createdAt}</h6>
                <h6 className="price">Price: Rs.{product.price}</h6>
                <h6 className="old-price">Old Price: <strike>Rs.{product.oldPrice}</strike></h6>
                <h6><h4>Description:</h4> {product.description}</h6>
            </div>
        </div><hr/><hr/>
        <div className="row">
         <div className='mt-4'>
            <button className="btn btn-primary mx-5"
            onClick={()=>{
              setShowDescription(false);
            }}>Review</button>
            <button className="btn btn-primary mx-5"
             onClick={()=>{
                setShowDescription(true);
              }}>Description</button>
          </div>
          {showDescription ? <Description /> : <Review />}
        </div>
 </div>
  )
}

export default ProductDetails;
