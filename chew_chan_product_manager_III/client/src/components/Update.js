import React, { useEffect, useState}from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res)
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);

        })
        .catch((err)=>{console.log(err)});
    },[]);


    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`,{
            title,
            price,
            description,
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);

            navigate(`/oneproduct/${res.data._id}`);
        })
        .catch((err)=>{
            console.log(err);
        });
    }    

    return (
        <div>
            <form className="col col-6 mx-auto" onSubmit ={submitHandler}>
                <div className ="mb-3">    
                    <label className="form-label">
                        Title
                    </label>
                    <input
                    className="form-control"
                    type ="text"
                    name ="title"
                    value ={title}
                    onChange ={(e)=> setTitle(e.target.value)}
                    />
                </div>

                <div className ="mb-3">
                    <label className="form-label">
                        Price:
                    </label>
                    <input 
                    className="form-control"
                    onChange={(e)=> setPrice(e.target.value)}
                    value={price}
                    name="price"
                    type="number"
                    />
                </div>
                <div className ="mb-3">
                    <label className="form-label">
                        Description:
                    </label>
                    <input 
                    className="form-control"
                    onChange={(e)=> setDescription(e.target.value)}
                    value={description}
                    name="description"
                    type="text"
                    />
                </div>
                <button>Update Product</button>
            </form>
        </div>
    )
}

export default Update