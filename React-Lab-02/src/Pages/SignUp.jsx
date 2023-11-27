import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function SignUp() {
    const navigate = useNavigate();

  return (
    <>
    <div className='bg-[rgba(234,210,238,0.68)] my-56 mx-96 p-5 max-sm:my-20 max-sm:mx-28 max-sm:p-16'>
    <div className='flex flex-col items-center justify-center'>
        <h1 className='p-5 font-bold'>Sign Up</h1>
        <label htmlFor="">Enter Your name</label>
        <input className='border' type="text" />
    </div>

    <div className='flex flex-col items-center'>
        <label htmlFor="">Enter Your email</label>
        <input className='border' type="email" />
    </div>

    <div className='flex flex-col items-center'>
        <label htmlFor="">Enter Your password</label>
        <input className='border' type="password" />
        <button className='bg-[rgb(186,104,200)] text-white rounded p-1 mt-5' onClick={()=>{{navigate('/Bootcamps')}}}>SignUp!</button>
    </div>
    
    </div>
    </>
  )
}

export default SignUp