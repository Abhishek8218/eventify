'use client';
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const Navitems = () => {
  const pathname = usePathname();
  return (
   
    <ul className='md:flex-between  flex gap-5  md:flex-row w-full flex-col items-start'>
       {headerLinks.map((link) => {
      const IsActive = pathname === link.route;
return(
    <li key={link.route} className={`${
      IsActive && 'text-violet-600'
    } p-medium-16 whitespace-nowrap flex-center`}>
<Link href={link.route}>{link.label}</Link>
    </li>
)
       })}

    </ul>
  )
}

export default Navitems