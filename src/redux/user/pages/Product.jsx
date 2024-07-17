import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_PENDING } from '../../admin/action'



const Product = () => {

  let product = useSelector((state) => state.adminReducer)
  console.log(product);

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PENDING })
  }, [])

  return (
    <>
      <section className="head-pro">
        <div className="container">
          <div className="product-data">
            <h1>For your beauty</h1>
            <h2>OUR PRODUCTS</h2>
          </div>
        </div>
      </section>
      <section className="product-details">
        <div className="container">
          <div className="row">
            {
              product.product.map((val, ind) => {
                return (
                  <div className="col-lg-3 mt-4">
                    <div className="pro-data">
                      <div className="product-img">
                        <img src={val.image} alt="image" />
                      </div>
                      <div className="detail text-center">
                        <p className='mb-1 mt-2'>{val.title}</p>
                        <span>$ {val.price}.00</span>
                        <p>{val.category}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
