import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'


function Navbar() {
  return (
    <nav className="border border-black w-1/5  h-[85vh] flex flex-col  gap-8">
        <section className='text-center border border-b-black'>
        <h1 className='font-extrabold text-xl w-full'>Navigation</h1>
        </section>
        <section className='h-full'>
            <article className='flex gap-4'>
                <HomeIcon className='h-[4vh]'/>
                <h4 className='font-semibold place-self-end'>Home</h4>
            </article>
        </section>
    </nav>
  )
}


export default Navbar