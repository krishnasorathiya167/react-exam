import React from 'react'

const Home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-data">
                <div className="banner-img ms-5">
               <img src="http://demo.snstheme.com/wp/dbea/wp-content/uploads/2022/05/slide-1-img2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-imgg">
                <img src="http://demo.snstheme.com/wp/dbea/wp-content/uploads/2022/05/slide-1-img1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="data-card">
        <div className="info">
          <h1>New Listick For Your Girl</h1>
          <p>Nunc solades justo felis vulput auctor risus</p>
          <button className='shop-btn'>shop Now</button>
        </div>
      </div>
    </>
  )
}

export default Home
