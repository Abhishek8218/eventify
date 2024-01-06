import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center gap-4 p-5 text-center sm:flex-row wrapper flex-between glex flex-col '>
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt='logo' width={128} height={38}/>
        </Link>
        <p>2024 Eventify. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer