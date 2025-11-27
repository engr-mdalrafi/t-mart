import React from 'react'
import Button from '../UI/Button'
import { FaArrowRightLong } from 'react-icons/fa6'

const Banner = () => {
  return (
    <>
      <section className='bg-[url("/Home-banner.png")] bg-center sm:bg-cover bg-cover'>
        <div className='container py-[276px] flex flex-col items-end'>
          <div className='md:text-left max-w-[431px] text-3xl text-primary '>
            <h1 className='pb-4'>Awesome Product Collection In 2022</h1>
            <Button title={"Shop Now_"} path={"/shop"}/> 
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner