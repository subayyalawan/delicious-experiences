import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout ({ children }){
  return (
    <>
        <div>
            <Navigation />
            <Outlet />
            {/* {children} */}
            <Footer />
        </div>
    </>
  )
}
