import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {

  const {doctors} = useContext(AppContext);
  return (
    <div>
       <p className='font-medium text-2xl my-6'>My Appointment:</p>
       {
         doctors.slice(0,3).map((item,index)=>(
          <div className='flex flex-col sm:flex-row gap-4 bg-gray-50 p-2  border-b' key={index}>
              <div className='overflow-hidden'>
                   <img src={item.image} alt="" className='w-36 bg-blue-50'/>
              </div>
              <div className='flex-1 flex-col text-sm'>
                 <p className='font-medium text-xl '>{item.name}</p>
                 <p className='text-sm'>{item.speciality}</p>
                 <p className='font-medium mt-1'>Address:</p>
                 <p>{item. address.line1}</p>
                 <p>{item. address.line2}</p>
                 <p className='font-medium'>Date & Time:<span className='font-light'>24/5/2025 || 8.30</span></p>
                
              </div>
              <div className='flex flex-col justify-end gap-2'>
                 <button className='px-4 py-2 text-center text-sm text-gray-700 border border-gray-300 rounded hover:bg-primary hover:text-white'>Pay Online</button>
                 <button className='px-4 py-2 text-center text-sm text-gray-700 border border-gray-300 rounded hover:bg-red-400 hover:text-white'>Cancle</button>
              </div>
          </div>
         ))
       }
   </div>
  )
}

export default MyAppointment