import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default App
