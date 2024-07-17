import { useState } from "react"
import { adminNav, userNav } from "./Data"
import { Link } from "react-router-dom"


let Navbar = (props) => {

  const [data, setdata] = useState(props.element ==="admin" ? adminNav : userNav)

  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container">
        <a class="navbar-brand" href="#">
          <div className="logo-img me-5 pe-5">
            <img src="http://demo.snstheme.com/wp/dbea/wp-content/themes/dbea/assets/img/logo.png" alt="logo-img" />
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  me-auto mb-2 mb-lg-0">

            {
              data.map((val,ind)=>{
                return(
                  <li class="nav-item me-4" key={val.path}>
                 <Link to={val.path}><a class="nav-link" href="#">{val.name}</a></Link>
            </li>
                )
              })
            }
           
          </ul>
        </div>
        <div className="profile">
        <i class="fa-solid fa-user"></i>
        </div>
      </div>

    </nav>
  )
}


export { Navbar }