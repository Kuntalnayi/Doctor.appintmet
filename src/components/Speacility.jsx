import React from 'react'
import { assets, specialityData } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Speacility = () => {

  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center gap-4 py-16 ' id='Speciality'>
        <h1 className='text-3xl font-medium'>Find by speciality</h1>
        <p className=' w-1/3 text-sm'>simple browser through our extensive list of trusted doctor.</p>
        
        <div className='flex gap-4 pt-5 w-full overflow-scroll sm:justify-center'>
            {
                specialityData.map((item,index)=>(
                    <Link  onClick={()=>scrollTo(0,0)} className='flex flex-col ites-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`doctors/${item.speciality}`}>
                       <img className='w-16 sm:w-20 mb-2' src={item.image} alt="" />
                       <p className='text-sm '>{item.speciality}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Speacility