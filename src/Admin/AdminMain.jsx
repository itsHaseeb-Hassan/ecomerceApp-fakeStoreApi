import React from 'react'
import SideBar from './components/SIdebar/SideBar'
import NavBar from './components/Navbar/NavBar'
import MultipleCard from './components/Card/MultipleCard'

const AdminMain = () => {
  return (
    <div>
        
        <NavBar />
        <div className='flex'>
        <SideBar />
        <MultipleCard />
        </div>
    </div>
  )
}

export default AdminMain