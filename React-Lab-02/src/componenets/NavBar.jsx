import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function NavBar() {
    const navigate = useNavigate();
  return (
    <>
        <nav className='bg-[rgba(234,210,238,0.68)] p-3 max-sm:p-10'>
            <div className='flex justify-between items-center max-sm:justify-evenly'>
                <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/9691/9691196.png" alt="" />
                <div>
                    <ul className='flex gap-10'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Bootcamps'>Bootcamps</Link></li>
                    </ul>
                </div>
                <div>
                    <div><button className='bg-[rgb(186,104,200)] text-white rounded p-1' onClick={()=>{{navigate('/SignUp')}}}>Sign Up</button></div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar