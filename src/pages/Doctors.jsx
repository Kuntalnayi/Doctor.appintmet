import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {

  const {speciality} = useParams();
  console.log(speciality);
  const {doctors} = useContext(AppContext);
  const [filterdoc,setFilterdoc] = useState([]);
  const navigate = useNavigate();

  const applyfilter = () =>{
    if(speciality){
      setFilterdoc(doctors.filter(doc => doc.speciality === speciality));
    }
    else{
      setFilterdoc(doctors);
    }
  }

  useEffect(()=>{
     applyfilter();
  },[doctors],[speciality])


  return (
    <div> 
      <p className='text-gray-700'>Browser through the doctors speciality</p>
      <div className='flex flex-col sm:flex-row items-start gap-4'>
        <div className='flex flex-col gap-4 text-sm text-gray-600 mt-6'>
          <p className={`border border-gray-500 pl-3 pr-10 py-1.5 sm:w-auto w--[93vw] cursor-pointer ${speciality === "" ? 'bg-indigo-100 text-black' : ""}`}>General physician</p>
          <p className={`border border-gray-500 pl-3 pr-10 py-1.5 sm:w-auto w--[93vw] cursor-pointer ${speciality === "" ? 'bg-indigo-100 text-black' : ""}`}>Gynecologist</p>
          <p className={`border border-gray-500 pl-3 pr-10 py-1.5 sm:w-auto w--[93vw] cursor-pointer ${speciality === "" ? 'bg-indigo-100 text-black' : ""}`}>Dermatologist</p>
          <p className={`border border-gray-500 pl-3 pr-10 py-1.5 sm:w-auto w--[93vw] cursor-pointer ${speciality === "" ? 'bg-indigo-100 text-black' : ""}`}>Pediatricians</p>
          <p className={`border border-gray-500 pl-3 pr-10 py-1.5 sm:w-auto w--[93vw] cursor-pointer ${speciality === "" ? 'bg-indigo-100 text-black' : ""}`}>Neurologist</p>
          <p className={`border border-gray-500 pl-3 pr-10 py-1.5 sm:w-auto w--[93vw] cursor-pointer ${speciality === "" ? 'bg-indigo-100 text-black' : ""}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 pt-6 px-3 sm:px-0 gap-y-6'>
            {
              filterdoc.map((item,index)=>(
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

      
  </div>
  )
}

export default Doctors