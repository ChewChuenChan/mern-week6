import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const {product,setProduct} = props;

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data);

        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return (
        <div>
            <h1 className='display-3 text-center m-3'>All Products:</h1>
            {
                product.map((item,index)=>{
                    return(                    
                        <div key={index} className='col col-2 mx-auto m-3 text-center'>
                            <Link to={`/product/${item._id}`}>{item.title}</Link>

                        </div>);

                })
            }

        </div>
    )
}

export default ProductList