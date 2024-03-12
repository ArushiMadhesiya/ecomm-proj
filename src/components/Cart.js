import React from 'react';
import { useSelector } from 'react-redux';
const Cart = () => {
    let res=useSelector((state)=>state.cartData)
  return (
    <div className="">
    <h1>cart page</h1>
    <div className='cart-page-container'>
    <table>
    <tr>
            <td>name</td>
            <td>brand</td>
            <td>price</td>
            <td>color</td>
        </tr>
    </table>
        
    
    {
        res.map((item)=>
        <table>
        <tr>
            <td>{item.name}</td>
            <td>{item.brand}</td>
            <td>{item.price}</td>
            <td>{item.color}</td>
        </tr>
        </table>
        )
    }
    </div>
        </div>
  );
};

export default Cart;
