import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'

const Navbar = () => {

    const navigate = useNavigate();
  
    const [show,setShow] = useState(true);
    const [token,setToken] = useState(true);
  return (
    <div className='flex justify-between items-center py-4 mb-5 border-b border-bottom-500 text-sm'>
       <img src={assets.logo} className='w-25' alt="" />
       <ul className='hidden sm:flex gap-6 font-medium  '>
          <NavLink to='/'>
                <li >Home</li>
                <hr  className='w-2/4 border-none h-[1.5px] m-auto bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to='/doctors'>
                <li >All Doctor</li>
                <hr  className='w-2/4 border-none h-[1.5px] m-auto  bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to='/about'>
                <li >About</li>
                <hr  className='w-2/4 border-none h-[1.5px]m-auto  bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to='/contact'>
                <li >Contact</li>
                <hr  className='w-2/4 border-none h-[1.5px] m-auto bg-gray-700 hidden'/>
          </NavLink>
       </ul>
       <div className='flex items-center gap-4'>
        {
            token ?
             <div className='flex items-center cursor-pointer group relative' >
                <img src={assets.profile_pic} alt=""  className='w-8 rounded-full'/>
                <img src={assets.dropdown_icon} alt="" className='w-2.5' />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 p-4 rounded flex flex-col'>
                        <p onClick={()=>navigate('/myprofile')} className='hover:text-black-700'>My Profile</p>
                        <p onClick={()=>navigate('/myappointment')} className='hover:text-black-700'>My Appoinmet</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black-700'>Logout</p>
                    </div>
                </div>
             </div>
            
            :

          <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        }
       </div>
    </div>
  )
}

export default Navbar