import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <h2 className='my-10 sm:my-16 sm:text-6xl lg:text-7xl text-center font-extrabold'>
        Need a shorter link? We've got you covered.
      </h2>
      <form>
        <Input/>
        <Button>Trim!</Button>
      </form>
      <img src="/URLSnapper_Banner_Black_White.png" alt="urlsnapperbanner" className='w-full my-11'/>
    </div>
    
  )
}

export default LandingPage
