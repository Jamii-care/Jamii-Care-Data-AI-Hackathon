import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
      <div className='flex'>
        {/* Sidebar section */}
        <div className='w-[20%]'>
          <Sidebar/>
        </div>

        {/* Content Area */}
        <div className='w-[80%] p-5'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard