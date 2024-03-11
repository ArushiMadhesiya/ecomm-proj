 import React from 'react'
 import {addToCart, emptyCart, removeFromCart} from '../redux/action'
import { useDispatch } from 'react-redux'
const Main=()=>{
    const dispatch=useDispatch();
    const prod={
        name:"iphone",
        type:"mobile",
        price:1000
    }
    return (
        <div>
            <button onClick={()=> dispatch(addToCart(prod))}>add to cart</button>
            <button onClick={()=> dispatch(removeFromCart())}>rem from cart</button>
            <button onClick={()=> dispatch(emptyCart())}>empty cart</button>
        </div>
    )
}
export default Main;