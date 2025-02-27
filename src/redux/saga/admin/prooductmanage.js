import { call, put } from "redux-saga/effects";
import { delete_product, get_product, post_product, update_product } from "../../admin/api";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_SUCCESS } from "../../admin/action";


function* handle_get_product(action) {
    try {
        let { data } = yield call(get_product, action);
        yield put({ type: GET_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_PRODUCT_ERROR, payload: error })
    }
}

function* handle_post_product(action) {
    try {
        let { data } = yield call(post_product, action);
        yield put({ type: POST_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_PRODUCT_ERROR, payload: error })
    }
}

function* handle_delete_product(action) {
    try {
        let { data } = yield call(delete_product, action);
        yield put({ type: DELETE_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: DELETE_PRODUCT_ERROR, payload: error })
    }
}

function* handle_update_product(action) {
    try {
        let { data } = yield call(update_product, action);
        yield put({ type: UPDATE_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: UPDATE_PRODUCT_ERROR, payload: error })
    }

}

export { handle_get_product, handle_post_product, handle_delete_product, handle_update_product }