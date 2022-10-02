import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import './Product.css'

const Product = () => {
    const[product,setProduct]=useState([]);
    const api=async()=>{
        const res=await fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json');
        const data=await res.json();
        setProduct(data);
    }
    useEffect(()=>{
        api();
    },[])
    console.log(product);
  return (
    <>
    <h3>PRODUCTS</h3>
    <div className='products'>
        {Object.values(product).map((data)=>
        <Card key={data.id} value={data}/>
        )}
    </div>
    </>
    
  )
}

export default Product