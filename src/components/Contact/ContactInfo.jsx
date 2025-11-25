import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { TfiMobile } from 'react-icons/tfi'

const ContactInfo = () => {
  return (
    <>
    <div className='container'>
      <div className='py-[120px] grid grid-cols-2'>
        <div className='text-secondary'>
            <h2 className='text-[20px]'>Contact Info</h2>
            <div className='pt-10 flex gap-4'>
                <div className='py-4 px-4 rounded-full border text-3xl'><IoLocationOutline /></div>
                <div className='text-lg text-secondary'>
                    <p>Location:</p>
                    <p>Your location goes here</p>
                </div>
            </div>
            <div className='flex gap-20'>
                <div className='pt-10 flex gap-4'>
                    <div className='py-4 px-4 rounded-full border text-3xl'><TfiMobile /></div>
                    <div className='text-lg text-secondary'>
                        <p>Phone:</p>
                        <p>+00 111 222 333 44</p>
                    </div>
                </div>
                <div className='pt-10 flex gap-4'>
                    <div className='py-4 px-4 rounded-full border text-3xl'><TfiMobile /></div>
                    <div className='text-lg text-secondary'>
                        <p>Mail:</p>
                        <p>info@example.com</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='pt-14 pb-7'>send message</h2>
            </div>
        </div>

        <div>link</div>
      </div>
    </div>
    </>
  )
}

export default ContactInfo
