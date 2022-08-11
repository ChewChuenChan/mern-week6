import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneProduct = () => {
    const {id} = useParams();
    const [oneProduct,setOneProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            setOneProduct(res.data)
        })
        .catch((err)=>{console.log(err)});
    },[id]);
    return (
        <div className='card text-center col col-6 mx-auto' >
            <h1>{oneProduct.title}</h1>
            <h2>Price: ${oneProduct.price}</h2>
            <h3>Description: {oneProduct.description}</h3>
        </div>
    )
}

export default OneProduct