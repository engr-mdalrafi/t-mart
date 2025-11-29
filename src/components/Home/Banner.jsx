import React from 'react'
import Button from '../UI/Button'
import Aos from 'aos';
import "aos/dist/aos.css";

const Banner = () => {
  Aos.init();
  return (
    <>
      <section className='bg-[url("/Home-banner.png")] bg-center sm:bg-cover bg-cover'>
        <div className='container py-[276px] flex flex-col items-end'>
          <div data-aos="fade-left" className='md:text-left max-w-[431px] text-3xl text-primary '>
            <h1 className='pb-4'>Awesome Product Collection In 2022</h1>
            <Button title={"Shop Now_"} path={"/shop"}/> 
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner