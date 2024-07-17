import Swal from "sweetalert2";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PENDING, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PENDING, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_PENDING, UPDATE_PRODUCT_SUCCESS } from "./action";


let initialState = {
    product: [],
    isLoading: false,
    isError: null,
    alert:null
}

let adminReducer = (state = initialState, action) => {
    console.log(action, "reducer");

    switch (action.type) {
        case (GET_PRODUCT_PENDING, POST_PRODUCT_PENDING,DELETE_PRODUCT_PENDING,UPDATE_PRODUCT_PENDING): {
            return {
                ...state,
                isLoading: true,
            }
        }

        case GET_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: action.payload
            }
        }

        case POST_PRODUCT_SUCCESS:{
            return{
                isLoading:false,
                product:state.product.concat(action.payload),
                alert:Swal.fire({
                    title: "Sucess!",
                    text: "Product is Successfully Added!",
                    icon: "success"
                  })
            }
        }

        case DELETE_PRODUCT_SUCCESS:{
            return{
                isLoading:false,
                product:state.product.filter((val)=>val.id!=action.payload.id),
                alert:Swal.fire({
                    title: "Delete!",
                    text: "Product is Successfully Deleted!",
                    icon: "success"
                  })
            }
        }

        case UPDATE_PRODUCT_SUCCESS:{
            return{
                isLoading:false,
                product: state.product.map((val) => val.id == action.payload.id ? { ...action.payload } : val),
                alert:Swal.fire({
                    title: "Update!",
                    text: "Product is Successfully Updated!",
                    icon: "success"
                  })
            }
        }

        case (GET_PRODUCT_ERROR,POST_PRODUCT_ERROR,DELETE_PRODUCT_ERROR,UPDATE_PRODUCT_ERROR): {
            return {
                isLoading: false,
                isError: action.payload
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default adminReducer