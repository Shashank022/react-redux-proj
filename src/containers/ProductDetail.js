import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';



const ProductDetails = () =>{
    const product = useSelector((state) => state.product);
    const {productId} = useParams();
    console.log(productId);
    const dispatch = useDispatch();

const fetchProductDetails = async() =>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err)=>{
        console.log(err);
    });
    console.log(response);
    dispatch(selectedProduct(response.data));
}

    return(
        <div>
            <h1>Product Details</h1>
        </div>
    )
}

export default ProductDetails