import React, { useState } from 'react'

const Login = () => {

   const [state,setState] = useState('Sign up');
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');

   const submithandler = async (event) =>{
    event.preventDefault();
   }

  return (
    <form onSubmit={submithandler} className='flex items-center min-h-[80vh]'>
         <div className='flex flex-col gap-3 items-start p-8 m-auto min-w-[360px] sm:min-w-96 border rounded-xl text-sm text-zinc-600 shadow-lg'>
              <p className='font-semibold text-2xl'>{state === "Sign up" ? "Create Account" : " Login"}</p>
              <p>Please {state === "Sign up" ? "Create Account" : " Login"} Book your appointment</p>

              {
                state === "Sign up" && 
              <div className='w-full'>
                 <p>Full name</p>
                 <input type="text" className='border border-zinc-300 w-full p-2 mt-1' onChange={(event)=>setName(event.target.name)} required value={name} />
              </div>
              }
              <div className='w-full'>
                 <p>Email</p>
                 <input type="email" className='border border-zinc-300 w-full p-2 mt-1' onChange={(event)=>setEmail(event.target.email)} required value={email} />
              </div>
              <div className='w-full'>
                 <p>Password</p>
                 <input type="password" className='border border-zinc-300 w-full p-2 mt-1' onChange={(event)=>setPassword(event.target.password)} required value={password} />
              </div>
              <button className='bg-primary text-white text-xl w-full py-2 rounded-md'>{state === "Sign up" ? "Create Account" : " Login"}</button>
          
          {
            state === 'Sign up' ?
            <p>Already have an account ? <span onClick={()=>setState('')} className='underline text-primary cursor-pointer'>Login</span></p>
            :
            <p>Create an new account ? <span onClick={()=>setState('')} className='underline text-primary cursor-pointer'>Click here</span></p>
          }
           </div>
    </form>
  )
}

export default Login