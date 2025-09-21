import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu,DropdownMenuContent,DropdownMenuTrigger,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
const Header = () => {
    const navigate = useNavigate()
    const user = true;
  return (
    <nav className='py-4 flex justify-between items-center'>
        <Link to="/">
        <img src="/urlsnapperlogo.png" className='h-16' alt="Snapper Logo"/>
        </Link>
        <div>
            {!user ?
            <Button onClick={()=>navigate("/auth")}>Login</Button>
            :(
            <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            )
        }
        </div>
    </nav>
  )
}

export default Header
