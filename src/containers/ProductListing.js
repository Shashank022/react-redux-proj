import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect  } from 'react';
import { setProducts} from '../redux/actions/productActions';
import SearchBar from "./SerachBar";

const ProductListing = () =>{
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    //console.log(products);
    const fetchProducts = async() => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log(err);
        });
        if(response){
            dispatch(setProducts(response.data));
        }
        console.log(response.data);
    };

    useEffect(()=>{
        fetchProducts();
    });

    console.log("products",products);
return(
    <div>
        <div class="ui header"><SearchBar/></div>
        <div className="ui grid container">
           <ProductComponent/>
        </div>
    </div>
    )
}

export default ProductListing