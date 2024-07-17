import React from 'react'
import { Navbar } from './redux/atoms/Atom'
import { Route, Routes } from 'react-router-dom'
import Manage from './redux/admin/pages/Manage'
import Dashboard from './redux/admin/pages/Dashboard'
import Home from './redux/user/pages/Home'
import Product from './redux/user/pages/Product'

const App = () => {

  let role = "admin"

  if(role==="admin"){
    return(
      <>
      <Navbar element={role}/>
      <Routes>
        <Route path='/' element={<Manage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </>
    )
  }
  if(role==="user"){
    return(
      <>
      <Navbar element={role}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
      </>
    )
  }
}

export default App
