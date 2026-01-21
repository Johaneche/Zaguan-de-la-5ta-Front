import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import React from 'react';
// import { Route } from 'react-router-dom';


import './App.css'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Main from './components/Main/Main.jsx'

function App() {
  return (
    <>
    {/* <Route> */}
      <Header/>
      <Main />
      <Footer/>
    {/* </Route> */}
      
      
    </>
  )
}

export default App
