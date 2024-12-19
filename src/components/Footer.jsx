import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col gap-14 sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-40  '>
         <div>
             <img src={assets.logo}  className='w-25 overflow-hidden mb-5' alt="" />
             <p className='w-2/3 text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus rerum quibusdam quis ad expedita inventore quaerat ex doloremque eum dolores!</p>
         </div>
         <div>
            <p className='font-medium text-xl mb-5'>COMPANY</p>
            <ul className='gap-1 text-sm text-gray-600'>
                <li className='hover:text-black cursor-pointer'>Home</li>
                <li className='hover:text-black cursor-pointer'>About</li>
                <li className='hover:text-black cursor-pointer'>Doctors</li>
                <li className='hover:text-black cursor-pointer'>Contact</li>
                <li className='hover:text-black cursor-pointer'>Privacy policy</li>
            </ul>
         </div>
         <div>
            <p className='font-medium text-xl mb-5'>About More Info</p>
            <ul className='gap-1 text-sm text-gray-600'>
                <li className='hover:text-black cursor-pointer'>+82 57474 57241</li>
                <li className='hover:text-black cursor-pointer'>abc@abudulgamil.com</li>
            </ul>
         </div>
   </div>
  )
}

export default Footer