import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Topdoctor = () => {
    const {doctors} = useContext(AppContext);
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center gap-4 my-16'>
         
            <h1 className='text-center text-3xl font-medium '>Top Doctors To Book</h1>
            <p className=' w-1/3 text-sm '>Make your sechdule  and book appointment with special doctors.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-6 px-3 sm:px-0 gap-y-6'>
                {
                    doctors.slice(0,10).map((item,index)=>(
                        <div key={index} onClick={()=>navigate(`appointment/${item._id}`)} className='border border-blue-500 hover:translate-y-[-10px] transtion-all duration-500'>
                             <div>
                                <img src={item.image} alt="" className='mb-4 bg-blue-50 overflow-hidden'/>
                                <div className='p-4'>

                                <div className='flex items-center gap-3'>
                                    <p className='w-2 h-2 rounded-full bg-green-700'></p><p className='text-green-500 '>Avilable</p>

                                </div>
                                <p className='text-2xl font-medium '>{item.name}</p>
                                <p className='text-sm'>{item.speciality}</p>
                                </div>
                             </div>
                        </div>
                    ))
                }
            </div>
        
    </div>
  )
}

export default Topdoctor