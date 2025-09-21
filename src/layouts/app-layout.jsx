import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/header'

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen container'>
        <Header/>
        <Outlet/>
        
        {/* <div className="p-10 text-center !bg-gray-800 mt-10 text-white">
            Made with love , rai
        </div> */}
      </main>
        <footer className="p-10 text-center bg-gray-800 mt-10 text-white">
            Made with love , rai
        </footer>

    </div>
  )
}

export default AppLayout
