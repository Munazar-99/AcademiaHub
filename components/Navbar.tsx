import React from 'react'
import { HomeIcon, UserIcon } from '@heroicons/react/24/solid'
import { ListBulletIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="w-1/5 relative h-[86%] flex flex-col gap-16 bg-gray-100">
      <section className='text-center border border-b-black p-5'>
        <h1 className='font-extrabold text-xl w-full text-left'>Navigation</h1>
      </section>
      <section className='h-full flex flex-col gap-12'>
        <Link href={'/hello'} className='flex gap-4 ml-11'>
          <HomeIcon className='h-[4vh] fill-[rgb(35,42,45)]'  />
          <h4 className='place-self-end '>Home</h4>
        </Link>
        <Link href={'/hello'} className='flex gap-4 ml-11'>
          <ListBulletIcon className='h-[4vh] fill-[rgb(35,42,45)]' />
          <h4 className='place-self-end'>Students List</h4>
        </Link>
        <Link href={'/hello'} className='flex gap-4 ml-11'>
          <UserIcon className='h-[4vh] fill-[rgb(35,42,45)]' />
          <h4 className='place-self-end'>Manage Students</h4>
        </Link>
      </section>
    </nav>
  )
}


export default Navbar