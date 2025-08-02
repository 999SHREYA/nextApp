import React from 'react'
import Link from 'next/link'

const NavbarPage = () => {
  return (
    <div className='container flex items-center justify-between mx-auto text-xl'>
   <Link href="/">   <h1 className='font-bold text-xl'>Home</h1></Link>
      <div className="flex gap-2">

     <Link  href="/performance"> Performance</Link>
     <Link  href="/reliability"> Reliability</Link>
      </div>
    </div>
  )
}

export default NavbarPage