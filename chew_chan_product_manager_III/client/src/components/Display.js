import React,{useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


const Display = (props) => {
  const {productList,setProductList} = props;

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
    .then((res)=>{
      console.log (res.data)
      setProductList(res.data)
    })
    .catch((err)=>{console.log(err)})
  },[])

  const deleteHandler = (productId) =>{
    axios.delete (`http://localhost:8000/api/products/${productId}`)
    .then(()=>{
      const newProductList = productList.filter((product)=>{
        return product._id !==productId;
      })
      setProductList(newProductList);
    })
    .catch((err)=>{console.log(err)})
  }
  return (
    <div>
      {
          productList.map((product,index)=>{
              return(                    
                  <div key={index} className='col col-2 mx-auto m-3 text-center'>
                      <Link to={`/oneproduct/${product._id}`} className="display-5">{product.title}</Link>
                      <div className='d-flex justify-content-between '> 
                        <Link to={`/edit/${product._id}`} className="btn btn-success">Edit Product</Link>
                        <button
                        className='btn btn-danger'
                        onClick={()=>deleteHandler(product._id)}>
                          Delete Product
                        </button>

                      </div>

                  </div>);

          })
      }        
    </div>
  )
}

export default Display