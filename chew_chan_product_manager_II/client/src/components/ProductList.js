import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const ProductList = () => {
    const [list,setList] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            setList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return (
        <div>
            <h1 className='display-3 text-center m-3'>All Products:</h1>
            {
                list.map((product)=>{
                    return(                    
                        <div className='col col-4 mx-auto m-3 text-center'>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>

                        </div>);

                })
            }

        </div>
    )
}

export default ProductList