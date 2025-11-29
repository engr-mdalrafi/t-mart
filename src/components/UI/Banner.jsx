import React from 'react'
import { Link } from 'react-router'
import Aos from 'aos';
import "aos/dist/aos.css";

const Banner = ({title, path}) => {
  Aos.init();
  return (
    <>
      <section className='bg-[url("/Banner.png")] bg-cover bg-center py-[150px]'>
        <div className="container">
          <div data-aos="fade-down" className='flex flex-col items-center'>
            <h2 className='text-4xl'>{title}</h2>
            <div className='flex text-lg pt-5'>
            <Link to='/'>{path}</Link>
            <p>/ {title}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
