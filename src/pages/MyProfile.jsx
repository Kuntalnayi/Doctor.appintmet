import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [isedit, setIsedit] = useState(false);
  const [userdata, setUserdata] = useState({
    name: "kuntal nayi",
    Email: "kuntal@gmail.com",
    image: assets.profile_pic,
    Phone: '+91 5268 65125',
    Address: {
      line1: "Harsol vitthalnager society",
      line2: 'Talod sabarkantha',
    },
    gender: "Male",
    dob: '26/4/2004'
  })
  return (
    <div className='flex flex-col max-w-lg gap-2 text-sm'>
      <img src={userdata.image} alt="" className='w-36 mb-3'/>
      {
        isedit ?
          <input type="text" className='text-3xl font-medium mb-2 bg-gray-50' onChange={e => setUserdata(prev => ({ ...prev, name: e.target.value }))} value={userdata.name} />
          :
          <p className='text-3xl font-medium mb-2'>{userdata.name}</p>

      }
      <hr />
      <div >
        <p className='text-2xl font-medium underline'>Contact Information</p>
        <div className='text-neutral-700 mt-3 grid grid-cols-[1fr_3fr] gap-y-2.5'>
          <p>Email:</p>
          <p>kuntal@gmail.com</p>
          <p>Phone:</p>
          {
            isedit ?
              <input type="text" onChange={e => setUserdata(prev => ({ ...prev, Phone: e.target.value }))} value={userdata.Phone} className='bg-gray-50 max-w-28'/>
              :
              <p>{userdata.Phone}</p>

          }
          <p>Address</p>
          {
            isedit ?
              <p>
                <input type="text" onChange={e => setUserdata(prev => ({ ...prev.Address, line1: e.target.value }))} value={userdata.Address.line1} className='bg-gray-50 max-w-28'/>
                <br />
                <input type="text" onChange={e => setUserdata(prev => ({ ...prev.Address, line2: e.target.value }))} value={userdata.Address.line2} className='bg-gray-50 max-w-28'/>
              </p>
              :
              <p>{userdata.Address.line1}

                <br />
                {userdata.Address.line2}
              </p>


          }
        </div>
      </div>
      <div>
         <p className='text-2xl font-medium underline'> Basic Information</p>
         <div  className='text-neutral-700 mt-3 grid grid-cols-[1fr_3fr] gap-y-2.5'>
           <p>Gender:</p>
           {
            isedit ? 
             <select name="" id="" onChange={e => setUserdata(prev => ({ ...prev, gender: e.target.value }))} value={userdata.gender} className='max-w-20'>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
             </select>
             :
             <p>{userdata.gender}</p>
           }
           <p>Birthday</p>
           {
            isedit ? 
            <input type="date" onChange={e => setUserdata(prev => ({ ...prev, dob: e.target.value }))} value={userdata.dob} className='max-w-36'/>
            :
            <p>{userdata.dob}</p>
           }
         </div>
      </div>
      <div>
        {
          isedit ?
          <button onClick={()=>setIsedit(false)} className='border mt-2 border-gray-200 px-4 py-2 text-sm text-gray-700 text-center hover:text-white hover:bg-primary '>Save Information</button>
          :
          <button onClick={()=>setIsedit(true)} className='border mt-2 border-gray-200 px-4 py-2 text-sm text-gray-700 text-center hover:text-white hover:bg-primary '>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile