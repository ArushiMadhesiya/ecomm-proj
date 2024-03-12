import {put, takeEvery} from "redux-saga/effects"
import { PRODUCT_LIST, SET_LIST } from "./constants";
function* getProducts(){
    // api calling
    let data = yield fetch('http://localhost:3500/products');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_LIST, data})
}
function* prodsaga(){
    yield takeEvery(PRODUCT_LIST,getProducts);
}
export default prodsaga;