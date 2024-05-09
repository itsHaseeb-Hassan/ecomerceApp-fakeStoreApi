import React, { Children } from 'react'
import Footer from '../Footer'
import TopBar from '../TopBar'
import NavBar from '../NavBar'
import LinksBar from '../LinksBar'
import HeroSection from '../HeroSection'
const Layout = ({children}) => {
  return (
    <div>
        <TopBar />
       <NavBar />
       <LinksBar />
       <HeroSection />
       {children}
       <Footer />
    </div>
  )
}

export default Layout