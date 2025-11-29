import React, { useState } from 'react'
import { CiSearch, CiUser } from 'react-icons/ci'
import { FaBars } from 'react-icons/fa'
import { TfiShoppingCart } from 'react-icons/tfi'
import { Link } from 'react-router'

const Navbar = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <nav className='relative bg-[#f1f1f1]'>
        <div className="container flex justify-between items-center">
          <div className='py-[54px]'><Link to="/"><img src="/logo.png" alt="logo" /></Link></div>
          {/* Desktop Nav */}
          <div className='hidden md:block'>
            <ul className='text-base font-medium text-secondary flex gap-10'>
              <li><Link to="/" className='hover:text-red-600'>Home</Link></li>
              <li><Link to="/shop" className='hover:text-red-600'>Shop</Link></li>
              <li><Link to="/contact" className='hover:text-red-600'>Contact</Link></li>
            </ul>
          </div>
          {/* Mobile Nav */}
          <div className='md:hidden'>
            <ul className={`text-base font-medium text-secondary flex flex-col items-center transition ${show ? "translate-x-0" : "translate-x-full"}  gap-10 fixed top-2/12 right-0 w-[250px] h-screen pt-5 bg-[#f1f1f1]`}>
              <li><Link to="/" className='hover:text-red-600'>Home</Link></li>
              <li><Link to="/shop" className='hover:text-red-600'>Shop</Link></li>
              <li><Link to="/contact" className='hover:text-red-600'>Contact</Link></li>
            </ul>
          </div>
          <div className='flex gap-7 '>
            <ul className='flex gap-7 text-base'>
              <li>
                <Link to=""><CiSearch /></Link>
              </li>
              <li>
                <Link to=""><CiUser /></Link>
              </li>
              <li>
                <Link to=""><TfiShoppingCart /></Link>
              </li>
            </ul>
          <button onClick={()=>setShow(!show)} className='cursor-pointer md:hidden'>
            <FaBars />
          </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
