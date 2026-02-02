import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/header'

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen w-full'>
         <div className="container mx-auto px-6">
        <Header/>
        <Outlet/>
        </div>
      </main>
        <footer className="p-10 text-center bg-gray-800 mt-10 text-white">
            URLSnapper • Shorten, share, and track your links  
            @ 2026 URLSnapper.  
            Privacy • Terms • Contact

        </footer>

    </div>
  )
}

export default AppLayout
