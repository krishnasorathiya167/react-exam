import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PENDING, GET_PRODUCT_PENDING, POST_PRODUCT_PENDING, UPDATE_PRODUCT_PENDING } from '../action';

const Manage = () => {


    // const [data, setdata] = useState(initialState)
    const [model, setmodel] = useState("none")
    const [view, setview] = useState({})
    let dispatch = useDispatch();

    let product = useSelector((state) => state.adminReducer)
    console.log(product);

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PENDING })
    }, [])

    // add product

    let image = useRef();
    let title = useRef();
    let price = useRef();
    let category = useRef();

    let addproduct = () => {
        let product = {
            image: image.current.value,
            title: title.current.value,
            price: price.current.value,
            category: category.current.value,
        }
        console.log(product);
        dispatch({ type: POST_PRODUCT_PENDING, payload: product })
    }

    // delete

    let deleteProduct = (id) => {
        dispatch({ type: DELETE_PRODUCT_PENDING, payload: id })
    }

// update

let viewData = (val) => {
    setview(val)
    setmodel("block")
}

let closee = () => {
    setmodel("none")
}

let handle = (e) => {
    setview({ ...view, [e.target.name]: e.target.value })
}
let save = (e) => {
    setmodel("none")
    dispatch({ type: UPDATE_PRODUCT_PENDING, payload: view })
}



    return (
        <>

            <div className="model-data">
                <div className="container">
                    <div className="btn-model d-flex justify-content-end">
                        <button type="button" className="btn-data" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Product</button>
                    </div>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Image :</label>
                                            <input type="text" ref={image} name='image' className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Title :</label>
                                            <input type="text" ref={title} name='title' className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Price : </label>
                                            <input type="text" ref={price} name='price' className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Category : </label>
                                            <input type="text" ref={category} name='category' className="form-control" id="recipient-name" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
                                    <button type="button" onClick={addproduct} className="btn" data-bs-dismiss="modal">add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="update_model" style={{ display: `${model}` }}>
                        {/* <form onSubmit={save}> */}
                        <div className="close-btn d-flex justify-content-end ">
                            <button className='bg-white border-0' onClick={closee}><i className="fa-regular fa-circle-xmark"></i></button>
                        </div>
                        <label>image : <input type="text" name='image' className="form-control" value={view.image} onChange={handle} /></label>
                        <label>Title : <input type="text" name='title' className="form-control" value={view.title} onChange={handle} /> </label>
                        <label>price : <input type="text" name='price' className="form-control" value={view.price} onChange={handle} /> </label>
                        <label>category : <input type="text" name='category' className="form-control" value={view.category} onChange={handle} /> </label>
                        <div className="view-btn d-flex justify-content-center mt-3">
                            <button className='button table-btn' onClick={save}>save</button>
                        </div>
                        {/* </form> */}
                    </div>

            <div className="manage">
                <div className="container">
                    <div className="table-dataa">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>delete</th>
                                    <th>update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.product.map((val, ind) => {
                                        return (
                                            <tr key={ind}>
                                                <td><img src={val.image} alt="" /></td>
                                                <td>{val.title}</td>
                                                <td>{val.price}</td>
                                                <td>{val.category}</td>
                                                <td><button className='table-btn' onClick={() => deleteProduct(val.id)}><i class="fa-solid fa-trash"></i></button></td>
                                                <td><button className='table-btn' onClick={()=>viewData(val)}><i className="fa-regular fa-pen-to-square"></i></button></td>

                                                
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manage
