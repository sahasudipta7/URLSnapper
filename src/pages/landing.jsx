import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate();

  const handleShorten = (e)=>{
    e.preventDefault()
    if(longUrl) navigate(`/auth?createNew=${longUrl}`);

  }

  return (
    <div className='flex flex-col items-center'>
      <h2 className='my-10 sm:my-16 sm:text-6xl lg:text-7xl text-center font-extrabold'>
        Need a shorter link? We've got you covered.
      </h2>
      <form onSubmit={handleShorten} className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
        <Input type="url"
        value= {longUrl}
        placeholder="Tired of lengthy links? Paste them here." 
        onChange={(e)=>setLongUrl(e.target.value)}
        className="h-full flex-1 py-4 px-4"/>
        <Button className="h-full" type="submit">Trim!</Button>
      </form>
      <img src="/URLSnapper_Banner_Black_White.png" alt="urlsnapperbanner" className='w-full my-11 md:px-11'/>
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>How does the trimming process work?</AccordionTrigger>
          <AccordionContent>
            Our system generates a trimmed verion of your URL , 
            which redirects to the original URL when accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do I have to create an account to use this app?</AccordionTrigger>
          <AccordionContent>
            Yes , account creation allows you to manage your URLs , 
            view analytics and customize your trimmed URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What kind of performance insights can I see for my short URLs?</AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks , geographical location information 
            and type of device(desktop/mobile) for each of your trimmed URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    
  )
}

export default LandingPage
