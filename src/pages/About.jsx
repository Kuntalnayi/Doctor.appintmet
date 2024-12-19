import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
         <div className='text-center pt-10 text-2xl text-gray-700'>
           <p>ABOUT <span className='font-medium text-black'>US</span></p>
         </div>
         <div className='flex flex-col md:flex-row gap-12  my-20'>
              <img src={assets.about_image} className='overflow-hidden w-full md:w-[360px]' alt="" />
              <div className='flex flex-col gap-5 text-sm w-2/4'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab magni dolor odit minima quo fugit quibusdam doloribus atque cum aliquid, mollitia aperiam sequi recusandae quos quaerat debitis ipsam adipisci blanditiis.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab magni dolor odit minima quo fugit quibusdam doloribus atque cum aliquid, mollitia aperiam sequi recusandae quos quaerat debitis ipsam adipisci blanditiis.</p>
                  <b>Our Value</b>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos molestiae, tempore consectetur doloribus deserunt rem nostrum enim soluta hic at blanditiis fuga ipsum eaque, iure dignissimos, dolores modi placeat exercitationem?</p>
              </div>
         </div>
         <div>
           <p className='text-2xl font-medium my-10'>Extrimes servies</p>
         </div>
         <div className='flex felx-col md:flex-row gap-3'>
          <div className='flex flex-col border border-gray-500 hover:bg-primary hover:text-white transition-all duration-500 px-8 md:px-16 py-7 md:py-16'>
             <b >Lorem, ipsum.</b>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex flex-col border border-gray-500 hover:bg-primary hover:text-white transition-all duration-500 px-8 md:px-16 py-7 md:py-16'>
             <b >Lorem, ipsum.</b>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex flex-col border border-gray-500 hover:bg-primary hover:text-white transition-all duration-500 px-8 md:px-16 py-7 md:py-16'>
             <b >Lorem, ipsum.</b>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
         </div>
    </div>
  )
}

export default About