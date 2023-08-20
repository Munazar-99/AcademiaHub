'use client'

import React from 'react';
import { Carousel } from 'antd';

const Home: React.FC = () => {
  return (
    <main className='w-4/5 h-[87%] bg-gray-100 flex items-center justify-center'>
      <section className=' w-[95%] h-[90%] mr-5 mb-5 '> 
      <Carousel autoplay effect="fade"> 
        <article className=' h-[75vh] w-[10%] mt-7 overflow-hidden rounded-3xl'>
          <img src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1747&q=80" alt="image2" />
        </article>
        <article className=' h-[75vh] w-[10%] mt-7 overflow-hidden rounded-3xl'>
          <img src="https://plus.unsplash.com/premium_photo-1683887034473-74e486cdb7a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" alt="image3" />
        </article>
        <article className=' h-[75vh] w-[10%] mt-7 overflow-hidden rounded-3xl'>
          <img src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="image4" />
        </article>
        <article className=' h-[75vh] w-[10%] mt-7 overflow-hidden rounded-3xl'>
          <img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="image5" />
        </article>
        <article className=' h-[75vh] w-[10%] mt-7 overflow-hidden rounded-3xl'>
          <img src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="image1" />
        </article>
      </Carousel>
      </section>
    </main>
  );
};

export default Home;