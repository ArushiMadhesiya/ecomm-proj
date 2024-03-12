import React from "react"
import { PRODUCT_LIST, SET_LIST } from "./constants"
export const productData=(state=[],action)=>{
    switch(action.type){
        
        case SET_LIST:
            return [...action.data];
        default :
            return state;
    }
}