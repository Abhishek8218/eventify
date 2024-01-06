import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import NavItems from './NavItems'

const Header = () => {
  return (
   <header className='w-full   border-b'>
    <div className="wrapper flex items-center justify-between">
        <Link href= "/" className='w-36'>
            <Image src= "/assets/images/logo.svg" width={128} height={36}
            alt="Eventify"/>
        </Link>
        <SignedIn >
                <nav className=" hidden md:flex md:flex-between justify-between items-center w-full max-w-xs">
                <NavItems/>
                </nav>
            </SignedIn>
        <div className=' flex gap-3 w-32 justify-end'>
           
            <SignedIn>
                <UserButton  afterSignOutUrl='/'/>
                <MobileNav/>
            </SignedIn>
            <SignedOut>
                <Button  asChild className="rounded-full bg-violet-700 text-white  py-2 px-6" size="lg" >
                    <Link href="/sign-in"> Login</Link>
                </Button>
            </SignedOut>
        </div>
    </div>
   </header>
  )
}

export default Header