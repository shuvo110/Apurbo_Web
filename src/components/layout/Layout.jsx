import React from 'react'
import NavBer from '../main/NavBer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Footer from '../main/Footer';
function Layout() {
  return (
    <div>
      <Toaster />
      <NavBer />
      <div>
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Layout