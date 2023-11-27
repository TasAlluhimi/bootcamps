import React from 'react'
import err from '../assets/404.svg'

function Error() {
  return (
    <>
        <div className='flex items-center justify-center'>
          <img className='w-[45%] max-sm:w-[100%] max-sm:py-40' src={err} alt="" />
        </div>
    </>
  )
}

export default Error