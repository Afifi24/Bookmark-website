import React from 'react'
import logo from '../images/logo-bookmark.svg'
const Nav = () => {
  return (
    <div className=' md:mx-32 my-10'>
        <div className='hidden md:flex items-center justify-between '>
            <div id='logo'><img src={logo} alt="" /></div>
            <ul className='flex uppercase items-center gap-12 text-sm'>
                 <a className='hover:text-SoftRed text-VeryDarkBlue duration-200' href="#">features</a>
                 <a className='hover:text-SoftRed text-VeryDarkBlue duration-200' href="#">pricing</a>
                 <a className='hover:text-SoftRed text-VeryDarkBlue duration-200' href="#">contact</a>
                 <button className='uppercase border-transparent bg-SoftRed  text-white border-2 hover:shadow-xl hover:text-SoftRed hover:bg-transparent duration-200 hover:border-SoftRed rounded-md font-semibold px-6 text-sm py-2 tracking-[2px]'>login</button>
            </ul>
        </div>
    </div>
  )
}

export default Nav