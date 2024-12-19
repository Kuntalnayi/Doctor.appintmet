import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Tracker = () => {

    const navigate = useNavigate();

  return (
    <div className='flex flex-col flex-wrap md:flex-row px-6 md:px-10 lg:px-20 bg-primary rounded-lg my-20'>
         {/* left side  */}
         <div className='flex-1 lg:py-24 md:py-20 py-8'>

         <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-6 text-white mb-5'>
              <p >Book Appointment</p>
              <p className='mt-4'>With 100+ Trusted Doctors.</p>
         </div>
         <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white  text-gray-900 px-8 py-3 rounded-full font-light '>Create Account</button>
         </div>

          {/* right side  */}
          <div className='hidden md:block relative md:w-1/2 lg:w-[370px]'>
            <img src={assets.appointment_img} alt="" className='bottom-0 right-0 absolute w-full rounded'/>
            </div>
        
    </div>
  )
}

export default Tracker