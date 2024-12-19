import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        <div className='text-center pt-10 text-2xl text-gray-700'>
           <p>CONTACT<span className='font-medium text-black'>US</span></p>
         </div>
         <div className='flex flex-col md:flex-row my-12 gap-12'>
            <img src={assets.contact_image} className='w-full md:w-[360px] overflow-hidden' alt="" />
            <div className='flex flex-col gap-4'>
              <b>Our Office</b>
              <p>
                s4768 window station <br />
                near harsol sabarkantha gujrat
              </p>
              <p>
                +65 65225 652265 5 <br />
                abc@gmail.com
              </p>
              <b>CARRER AT PRESCIPIO</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <button className= 'w-2/4 text-gray-800 px-4 py-3 border border-gray-500 text-sm font-medium  hover:bg-primary hover:text-white '>Explore job</button>
            </div>
         </div>
   </div>
  )
}

export default Contact