import { call, put } from "redux-saga/effects";
import { get_product } from "../../admin/api";
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../../admin/action";


function* handle_get_product(action){
    let {data,status} = yield call(get_product,action);
    try {
        yield put({type:GET_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        yield put({type:GET_PRODUCT_ERROR,payload:error})
    }
}

export {handle_get_product}