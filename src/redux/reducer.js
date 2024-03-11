import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants"
const cartData=(initial_state=[],action)=>{
   // console.warn("inside reducer");
    switch(action.type){
        case ADD_TO_CART:{
            // In this case, it logs a message ("reducer")
            // to the console and returns a new state array.
            // This new state array contains the action.data
            // (the payload data associated with the action) 
            //appended to the beginning of the existing state array (initial_state).
            // This pattern often represents adding an item to a cart.
            console.warn("reducer",action);
            return [action.data,...initial_state];
        }
        case REMOVE_FROM_CART:{
            console.warn("reducer",action);
        //    const newState= initial_state.slice(0, -1);
        //     return newState;
        //initial_state.length=initial_state.length-1;
            initial_state.pop();
            return [...initial_state];
        }
        case EMPTY_CART:{
            const newState=[];
            return newState;
        }
        default :
        console.warn("reducer with no action");
         return initial_state;
    }
   
}
export default cartData;