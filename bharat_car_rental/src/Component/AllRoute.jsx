import React from 'react'
import {Route,Routes} from "react-router-dom"
import BecomeHost from '../Page/BecomeHost'
import Login from '../Page/Login'
import Pune from '../Page/Pune'
import Admin from './admin'
import LandingPage from './LandingPage'

const AllRoute = () => {
  return (
    <Routes>
         <Route path='/' element={<LandingPage/>}/>
        <Route path='/pune' element={<Pune/>}/>
        <Route path='/becomehost' element={<BecomeHost/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AllRoute
