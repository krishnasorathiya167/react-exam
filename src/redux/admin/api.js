import axios from "axios"
import { ADD_PRODUCT, BASE_URL, DELETE_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT } from "../constant"


let get_product = async (action) => {
    // console.log(action, "action");
    let { data, status } = await axios.get(BASE_URL + GET_PRODUCT);
    return { data, status }
}

let post_product = async (action) => {
    // console.log(action, "action from api");
    let { data } = await axios.post(BASE_URL + ADD_PRODUCT, action.payload);
    return { data }
}

let delete_product = async (action) => {
    console.log(action, "from apiiii");
    let { data } = await axios.delete(BASE_URL + DELETE_PRODUCT + action.payload);
    return { data }
}

let update_product = async (action) => {
    console.log(action, "from api");
    let {data} = await axios.put(BASE_URL + UPDATE_PRODUCT + action.payload.id, action.payload);
    return {data};

}



export { get_product, post_product, delete_product, update_product }