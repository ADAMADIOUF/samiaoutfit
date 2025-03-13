import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />

      <Footer />
      <ScrollToTop />
      <ToastContainer />
    </div>
  )
}

export default App
