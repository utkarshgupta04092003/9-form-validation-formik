import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import Header from './components/Header';
import LoginContext from './context/LoginContext';



export default function App() {
  return (
    <div>


    <LoginContext>


      <BrowserRouter>
      <Header />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Error />} />

        </Routes>

      </BrowserRouter>
    </LoginContext>

    </div>
  )
}
