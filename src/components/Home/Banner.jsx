import React from 'react'
import Button from '../UI/Button'

const Banner = () => {
  return (
    <>
      <section className='bg-[url("/Home-banner.png")] bg-center bg-cover'>
        <div className='container py-[276px] relative'>
          <div className='md:text-left max-w-[431px] text-3xl text-primary sm:absolute sm:left-2/3 md:absolute md:left-2/4 '>
            <h1>Awesome Product Collection In 2022</h1>
            <Button title={"Shop Now"} path={"/shop"}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
