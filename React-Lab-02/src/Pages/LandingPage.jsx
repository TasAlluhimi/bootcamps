import React from 'react'
import main from '../assets/main.svg'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
    const navigate = useNavigate();
  return (
    <>
        <div className='flex justify-center items-center flex-wrap'>
            <img src={main} className='w-[40%] max-sm:w-[100%] max-sm:mt-32' alt="" />
            <div className='flex flex-col items-center gap-5'>
                <div className='text-3xl max-sm:p-5'>You can view all Bootcamps!</div>
                <button className='bg-[rgb(186,104,200)] text-white rounded p-1' onClick={()=>{{navigate('/Bootcamps')}}}>Bootcamps!</button>
                </div>
        </div>
    </>
  )
}

export default LandingPage