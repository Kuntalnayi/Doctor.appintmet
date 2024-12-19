import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import Related from '../components/Related';

const Appointment = () => {

  const {docId} = useParams();
  const {doctors, rupee} = useContext(AppContext);
  const [docdata,setDocdata] = useState(null);
  const [docslots,setDocslots] = useState([]);
  const [slotindex,setSlotindex] = useState(0);
  const [slottime,setSlottime] = useState('');
  const daysofweek = ['sun','mon','tue','wed','thu','fri','sat'];
// console.log(docId);

const getavlilablesolt = async () =>{
   setDocslots([])
   //getting current date
   let today = new Date();

   for(let i=0; i<7; i++){
    //geetting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date with index
      let endtime = new Date();
      endtime.setDate(today.getDate() + i);
      endtime.setHours(21,0,0,0);

      //seting hours
      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getDate() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else{
         currentDate.setHours(10);
         currentDate.setMinutes(0);
      }

      let timeslot = []

      while(currentDate < endtime){
        let formatedate = currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})

        timeslot.push({
          datetime:new Date(currentDate),
          time:formatedate
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocslots(prev => ([...prev,timeslot]))
   }
}
const data = async () =>{
     const datas = doctors.find(doc => doc._id === docId)
     setDocdata(datas);
     console.log(datas);
     
  }
  // console.log(datas);

  useEffect(()=>{
  data();
  },[doctors,docId])

  useEffect(()=>{
    getavlilablesolt();
  },[docdata])

  useEffect(()=>{
    console.log(docslots);
    
  },[docdata])
  return docdata &&  (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
         <div>
           <img src={docdata.image} alt="" className=' w-full sm:max-w-72 rounded-lg  overflow-hidden bg-primary'/>
         </div>
         <div className='flex-1 p-8 py-7 border border-gray-400 bg-white rounded-lg mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
           <p className='flex items-center gap-2 text-2xl font-medium mb-1'>
             {docdata.name}
             <img src={assets.verified_icon} alt="" className='w-5'/>
           </p>
           <div className='flex items-center'>
            <p >{docdata.degree}-{docdata.speciality}</p>
            <button className='px-2 py-0.5 rounded-full text-xs'>{docdata.experience}</button>
           </div>

           <div >
             <p className='flex items-center gap-1 text-sm font-medium mt-3'>About:<img src={assets.info_icon} alt="" /></p> 
             <p className='mt-1 max-w-[700px] text-gray-500'>{docdata.about}</p>
           </div>
           <p className='mt-1 font-medium'>
            Appontment Fees: <span className='font-medium'>{rupee}{docdata.fees}</span>
           </p>
         </div>
      </div>

      <div className='sm:ml-72 sm:pl-4 mt-5 text--xl text-gray-700
      '>
         <p>Book slots:</p>
         <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
            {
              docslots.length && docslots.map((item,index)=>(
                <div onClick={()=>setSlotindex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full ${slotindex === index ? 'bg-primary text-white' : 'text-gray-700 border border-gray-400 '}`}>
                  <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))
            }
         </div>
         <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docslots.length && docslots[slotindex].map((item,index)=>(
              
              <p key={index} onClick={()=>setSlottime(item.time)} className={`text-sm flex-shrink-0 cursor-pointer ${item.time === slottime ? 'bg-primary text-white rounded-full p-2':'text-gray-700 border border-gray-400 p-2 rounded-full'}`}>{item.time.toLowerCase()}</p>
            ))
          }
         </div>
         <button className='px-14 py-3 rounded-full font-light text-white bg-primary border border-gray-200 mt-5'>Book Your Appontment</button>
      </div>
      <Related docId={docId} speciality={docdata.speciality}/>
   </div>
  )
}

export default Appointment