import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 bg-primary'>
        {/* left part */}
        <div className='md:w-1/2 flex flex-col gap-3 items-start m-auto py-10 md:py-[10vw] md:mb-[-30px] justify-center'>
              <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semiblod leading-tight md:leading-tight lg:leading-tight '>Book Appointment <br /> With Trusted doctors.</p>
              <div className='flex flex-col md:flex-row text-sm font-light items-center gap-3'>
                 <img src={assets.group_profiles} alt=""  className='w-20'/>
                 <p className='text-white  text-base'>simple browser through our extensive list of trusted doctors <br />sechdule your appoontmnet with your favourate doctors.</p>
              </div>
              <a href="#Speciality" className='text-sm text-gray-600 bg-white px-4 py-2 hover:scale-110 transtion-all duration-500 rounded-lg'>
                 Book Appointmet
              </a>
        </div>
        {/* right part */}
       <div className='md:w-1/2 relative '>
        <img src={assets.header_img} className='w-full md:absolute rounded-lg h-auto bottom-0 ' alt="" />
       </div>
    </div>
  )
}

export default Header