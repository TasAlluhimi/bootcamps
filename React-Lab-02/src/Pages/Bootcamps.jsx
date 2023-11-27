import React from 'react'
import main from '../assets/main.svg'

function Bootcamps() {
  return (
    <>
          <div className='flex min-h-[100vh] w-[100%] justify-center flex-row items-center flex-wrap'>

        <div className='flex justify-center items-center w-[100%] max-sm:flex-col max-sm:gap-y-9 max-sm:text-center max-sm:mt-0'>

            <div>
                <img src={main} className='w-[100%] max-sm:w-[100rem]' alt="" />
            </div>
            <div className='flex justify-center flex-col gap-y-6 bg-[rgba(234,210,238,0.68)] text-black rounded-md p-10 text-center'>
                <p className='font-bold text-center'>Bootcamp Information:</p>
                <p className='text-center'>JavaScripts Bootcamp for web development  Start at 20-12-2023 <br /> this bootcamp will caontains all javascripts and react </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Bootcamps