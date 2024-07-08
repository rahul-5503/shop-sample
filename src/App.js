import React,{useState} from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {BrowserRouter , Route,Routes} from 'react-router-dom';
import Home from './container/Home.js';
import Success from './container/Success.js';
import Fail from './container/Fail.js';
const App = () => {

  return (
    <BrowserRouter>
     <Routes>
     <Route path="/container/home" element ={<Home/>}/>
      <Route path="/shop-sample/Success" element={<Success/>}/>
      <Route path="/shop-sample/Cancelled" element={<Fail/>} />
     </Routes>
    </BrowserRouter>
  
  )
}

export default App
