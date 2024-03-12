//import { createStore } from "redux";
// Redux Saga operates as middleware in your Redux store. You need to create
// a saga middleware and apply it to your Redux store during its configuration.
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import prodsaga from "./prodsaga";
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware=createSagaMiddleware();
 //const store = createStore(rootReducer)
 const store =configureStore({reducer:rootReducer,middleware:()=>[sagaMiddleware]});
 sagaMiddleware.run(prodsaga);
export default store;