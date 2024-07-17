import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PENDING } from "../../admin/action";
import { handle_get_product } from "../admin/prooductmanage";



function* handle_get_product_saga(){
yield takeLatest(GET_PRODUCT_PENDING,handle_get_product);
}

export {handle_get_product_saga}