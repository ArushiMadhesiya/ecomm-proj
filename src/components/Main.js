import React, { useEffect } from "react";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";
const Main = () => {
  const dispatch = useDispatch();
  const prod = {
    name: "iphone",
    type: "mobile",
    price: 1000,
  };
  const res = useSelector((state) => state);
  console.warn("full redux data in main", res);
  useEffect(()=>{dispatch(productList())},[])
  return (
    <div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
    <div className='product-container'>
        { res.productData.map((item)=><div className='product-item'>
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove to Cart</button>

              </div>
          </div>)}
    </div>
    </div>
   
  );
};
export default Main;
