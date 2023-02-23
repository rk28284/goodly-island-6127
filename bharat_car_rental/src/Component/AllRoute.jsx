import React from 'react'
import {Route,Routes} from "react-router-dom"
import Pune from '../City/Pune'
import LandingPage from './LandingPage'
const AllRoute = () => {
  return (
    <Routes>
         <Route path='/' element={<LandingPage/>}/>
        <Route path='/pune' element={<Pune/>}/>
    </Routes>
  )
}

export default AllRoute
