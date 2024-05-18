import React from 'react'
import SideBar from './components/SIdebar/SideBar'
import NavBar from './components/Navbar/NavBar'
import MultipleCard from './components/Card/MultipleCard'

const AdminMain = ({children}) => {
  return (
    <div>
        
        <NavBar />
        <div className='flex'>
        <SideBar />
        <div className='flex flex-col'>
        <MultipleCard />
        <div className='w-full'>
        {children}
        </div>
        </div>
        </div>
    </div>
  )
}

export default AdminMain