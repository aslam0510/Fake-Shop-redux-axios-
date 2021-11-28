import axios from 'axios';
import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import '../App.css'
import ProductComponent from './ProductComponent';
import { setProducts } from './../Redux/Actions/ProductAction';



const ProductList = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    fetchProducts()
  },[]);

  const fetchProducts = async() =>{
    const response = await axios.get('https://fakestoreapi.com/products').catch(err =>{
      console.log(err);
    })
    
    if(response.data.length){
      dispatch(setProducts(response.data))
    }
   
  }

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductList
