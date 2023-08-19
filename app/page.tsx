'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <main className='w-4/5 h-[87%] p-6 flex items-center justify-center bg-gray-100' >
      <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true} showStatus={false}>
        <section className=' h-[73vh]'>
          <img src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1747&q=80" alt="image2" />
        </section>
        <section className=' h-[73vh]'>
          <img src="https://plus.unsplash.com/premium_photo-1683887034473-74e486cdb7a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" alt="image3" />
        </section>
        <section className=' h-[73vh]'>
          <img src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="image4" />
        </section>
        <section className=' h-[73vh]'>
          <img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="image5" />
        </section>
        <section className=' h-[73vh]'>
          <img src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="image1" />
        </section>
      </Carousel>
    </main>
  )
}
