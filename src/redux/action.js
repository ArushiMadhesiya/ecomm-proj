import {ADD_TO_CART,EMPTY_CART,REMOVE_FROM_CART} from "./constants"
export const addToCart=(data)=>{
    console.warn("action called",data);
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const removeFromCart=()=>{
    console.warn("rem action called");
    return{
        type:REMOVE_FROM_CART,
    }
}
export const emptyCart=()=>{
    return{
        type:EMPTY_CART,
    }
}
