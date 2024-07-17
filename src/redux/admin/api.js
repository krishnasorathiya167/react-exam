import axios from "axios"
import { BASE_URL, GET_PRODUCT } from "../constant"


let get_product = async (action) => {
    console.log(action,"action");
    let {data,status} = await axios.get(BASE_URL + GET_PRODUCT);
    return {data,status}
}



export { get_product }