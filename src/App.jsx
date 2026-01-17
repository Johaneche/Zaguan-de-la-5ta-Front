import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Main from './components/Main/Main.jsx'

function App() {
  return (
    <>
      <Header/>
      <Main />
      
      
        {/* <h1>Zaguán de la Quinta</h1> */}
      <Footer/>
      
    </>
  )
}

export default App
