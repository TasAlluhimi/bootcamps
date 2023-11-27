import React from 'react'
import { Routes, Route as R} from 'react-router-dom';
import NavBar from '../componenets/NavBar';
import LandingPage from '../Pages/LandingPage';
import Bootcamps from '../Pages/Bootcamps';
import SignUp from '../Pages/SignUp';
import Error from '../Error/Error';

function Route() {
  return (
    <>
    <NavBar/>

        <Routes>
          <R path='/' element={<LandingPage/>}></R>
          <R path='/Bootcamps' element={<Bootcamps/>}></R>
          <R path='/SignUp' element={<SignUp/>}></R>
          <R path='/*' element={<Error/>}></R>
        </Routes>
    </>
  )
}

export default Route