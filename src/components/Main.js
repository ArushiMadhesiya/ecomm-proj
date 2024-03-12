 import React from 'react'
 import {addToCart, emptyCart, removeFromCart} from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/productAction';
const Main=()=>{
    const dispatch=useDispatch();
    const prod={
        name:"iphone",
        type:"mobile",
        price:1000
    }
    const res=useSelector((state)=>state)
    console.warn("full redux data in main",res);
    return (
        <div>
            <button onClick={()=> dispatch(addToCart(prod))}>add to cart</button>
            <button onClick={()=> dispatch(removeFromCart())}>rem from cart</button>
            <button onClick={()=> dispatch(emptyCart())}>empty cart</button>
            <button onClick={()=> dispatch(productList())}>list product</button>
            
        </div>
    )
}
export default Main;