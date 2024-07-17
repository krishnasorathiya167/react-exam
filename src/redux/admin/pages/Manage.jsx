import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_PENDING } from '../action';

const Manage = () => {

    let dispatch = useDispatch();

    let product = useSelector((state) => state.adminReducer)
    console.log(product);

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PENDING })
    }, [])

    // add product

    

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
                                    <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Image :</label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Title :</label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Price : </label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Category : </label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Send message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="manage">
                <div className="container">
                    <div className="table-dataa">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Category</th>
                                    <th>delete</th>
                                    <th>update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.product.map((val, ind) => {
                                        return (
                                            <tr key={ind}>
                                                <td>{val.title}</td>
                                                <td>{val.price}</td>
                                                <td>{val.category}</td>
                                                <td><button className='table-btn'><i class="fa-solid fa-trash"></i></button></td>
                                                <td><button className='table-btn'><i className="fa-regular fa-pen-to-square"></i></button></td>
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
