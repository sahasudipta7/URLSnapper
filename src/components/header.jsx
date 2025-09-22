import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu,DropdownMenuContent,DropdownMenuTrigger,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { LinkIcon, LogOut } from 'lucide-react'
const Header = () => {
    const navigate = useNavigate()
    const user = true;
  return (
    <nav className='py-4 flex justify-between items-center'>
        <Link to="/">
        <img src="/URLSnapper_Black_White_New_Scissor.png" className='h-16' alt="Snapper Logo"/>
        </Link>
        <div>
            {!user ?
            <Button onClick={()=>navigate("/auth")}>Login</Button>
            :(
            <DropdownMenu>
                <DropdownMenuTrigger className='w-10 rounded-flow overflow-hidden'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" className='h-10'/>
                        <AvatarFallback>SS</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuLabel>Sudipta Saha</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='flex items-center'>
                    <LinkIcon className='mr-2 h-4 w-4'/>
                    My Links
                </DropdownMenuItem>
                <DropdownMenuItem className='text-red-400 flex items-center'>
                    <LogOut className='mr-2 h-4 w-4'/>
                    <span>
                        Logout
                    </span>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            )
        }
        </div>
    </nav>
  )
}

export default Header
