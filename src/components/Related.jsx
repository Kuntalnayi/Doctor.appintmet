import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Related = ({docId,speciality}) => {
    const [related,setRelated] = useState([]);
    const navigate = useNavigate();

    const {doctors} = useContext(AppContext);

   
    useEffect(()=>{
       if(doctors.length >0 && speciality){
         const docdatas = doctors.filter((doc)=> doc.speciality === speciality && doc._id !== docId);
         setRelated(docdatas)
       }
    },[docId,doctors,speciality])
  return (
 
    <div>
         <p className='font-medium text-3xl text-center mt-20'>Related doctors</p>
         <div className='w-full grid grid-cols-auto gap-4 pt-6 px-3 sm:px-0 gap-y-6'>
                {
                    related.slice(0,5).map((item,index)=>(
                        <div key={index} onClick={()=>navigate(`doctors/appointment/:docId`)} className='border border-blue-500 hover:translate-y-[-10px] transtion-all duration-500'>
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

export default Related