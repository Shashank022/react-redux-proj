import React from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';

const ProductListing = () =>{
const products = useSelector((state) => state);
console.log(products);
    return(
        <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <ProductComponent/>
            </div>
            </div>
           
        </div>
    )
}

export default ProductListing