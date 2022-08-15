import React,{useEffect,useState} from 'react';
import { useParams,Link} from 'react-router-dom';
import axios from 'axios';

const OneProduct = () => {
    const {id} = useParams();
    const [oneProduct,setOneProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res.data)
            setOneProduct(res.data)
        })
        .catch((err)=>{console.log(err)});
    },[]);
    return (
        <div className='card text-center col col-6 mx-auto' >
            <h1>{oneProduct.title}</h1>
            <h2>Price: ${oneProduct.price}</h2>
            <h3>Description: {oneProduct.description}</h3>
            <div>
                <Link to={`/edit/${oneProduct._id}`} className="btn btn-success">Edit Product</Link>
            </div>

        </div>
    )
}

export default OneProduct