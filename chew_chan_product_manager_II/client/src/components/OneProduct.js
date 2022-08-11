import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneProduct = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((err)=>{console.log(err)});
    },[id]);
    return (
        <div className='card text-center col col-6 mx-auto' >
            <h1>{product.title}</h1>
            <h2>Price: ${product.price}</h2>
            <h3>Description: {product.description}</h3>
        </div>
    )
}

export default OneProduct