import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addItemAction } from '../store/actions/actions';

const Product = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);
    const dispatch=useDispatch();


    const addToCart=(product)=>{
        dispatch(addItemAction(product));
        navigate("/products")
    }


    const getProduct = async ()=>{
        setLoading(true);
        let res=await axios.get(`https://fakestoreapi.com/products/${id}`).then((response)=>{
            setProduct(response.data);
            setLoading(false);
        })
    }

    useEffect(()=>{
        getProduct();
    },[]);

    const Loading=()=>{
        return <div>Loading....</div>
    }


    const ShowProduct=()=>{
        return(
                
            <div className='d-flex px-5 mt-0'>
            <div className="col-md-4 my-0">
                <img src={product.image} alt={product.title} height={300}/>
            </div>
            <div className="col-md-8 my-0">
                <h4 className='text-uppercase'>{product.category}</h4>
                <h1 className="display-4 lead">{product.title}</h1>
                <h3 className="fw-bold p5">
                    price ${product.price} 
                </h3>
                <p className='text-justify'>{product.description}</p>
                <button className='btn btn-dark px-3 m-3' onClick={()=>{addToCart(product)}}>
                    Add to cart{" "}
                </button>
                <Link to="/cart" className='btn btn-warning px-3' onClick={()=>{addToCart(product)}}>Go To Cart{" "}</Link>
            </div>
            </div>
        )
    }
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
        {loading? <Loading/>:<ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default Product
