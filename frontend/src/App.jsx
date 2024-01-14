import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios';

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/product')
    .then((response)=>{
      
      setProducts(response.data)}
      
        ).catch((error)=>{
      console.log(error)
    });

  },[])
  
   return(
    <>
    <h1>
      full Stack
    </h1>
    <p>Product Length: {products.length}</p>
    {
 products.map((product,index)=>{
console.log(product);
  return<div key={index}>
    <h3>Tittle { product.title}</h3>
    <p>UserId { product.userId}</p>
  </div>
 })
    }
    </> 
      )
}

export default App
