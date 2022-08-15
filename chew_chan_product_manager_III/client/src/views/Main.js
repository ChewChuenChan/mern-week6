import { useState } from 'react';
import Form from '../components/Form';
import Display from '../components/Display';

const Main = (props) => {
  const [productList, setProductList] = useState([]);
  return (
    <div>
        <Form productList ={productList} setProductList ={setProductList}/>
        <hr></hr>
        <Display productList = {productList} setProductList={setProductList}/>
    </div>
  )
}

export default Main