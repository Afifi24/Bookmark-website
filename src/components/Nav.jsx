import React, { useState } from 'react'
import logo from '../images/logo-bookmark.svg'
import humberger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
const Nav = () => {
  const [closeopen,setCloseopen]= useState(false)
  const  CloseOpen = ()=>{
     setCloseopen(!closeopen)
  }
  return (
    <div className=' md:mx-32 my-10'>
      {/* desktop menu */}
        <div className='hidden md:flex items-center justify-between '>
            <div id='logo'><img src={logo} alt="" /></div>
            <ul className='flex uppercase items-center gap-12 text-sm'>
                 <a className='hover:text-SoftRed text-VeryDarkBlue duration-200' href="#">features</a>
                 <a className='hover:text-SoftRed text-VeryDarkBlue duration-200' href="#">pricing</a>
                 <a className='hover:text-SoftRed text-VeryDarkBlue duration-200' href="#">contact</a>
                 <button className='uppercase border-transparent bg-SoftRed  text-white border-2 hover:shadow-xl hover:text-SoftRed hover:bg-transparent duration-200 hover:border-SoftRed rounded-md font-semibold px-6 text-sm py-2 tracking-[2px]'>login</button>
            </ul>
        </div>
           <div onClick={CloseOpen} className=''>
              <img className='absolute right-6 cursor-pointer z-50 top-8 md:hidden' src={  closeopen? close:humberger} alt="" />
           </div>
           {/* mobile menu */}
           {
            closeopen && 
            <div className='absolute md:hidden top-0 z-30 left-0 right-0 h-screen w-full bg-black bg-opacity-90'>
               <nav className='flex flex-col gap-6 px-10 py-10'>
                    <div className=' mb-6 invert'><img src={logo} alt="" /></div>
                    <ul className='flex flex-col text-center gap-4'>
                      <a  onClick={()=>setCloseopen(false)} className='text-gray-300 uppercase p-3 border-t pt-6 ' href="#">features</a>
                      <a onClick={()=>setCloseopen(false)} className='text-gray-300 uppercase p-3 border-t pt-6' href="#">pricing</a>
                      <a onClick={()=>setCloseopen(false)} className='text-gray-300 uppercase p-3 border-t border-b pb-6 pt-6' href="#">contact</a>
                      <button onClick={()=>setCloseopen(false)} className='py-2 mt-4 px-4 border-2 text-white font-bold uppercase tracking-[3px]'>login</button>
                    </ul>
                    <div className='flex gap-10 mt-16 items-center justify-center'>
                      <img className='cursor-pointer' src={facebook} alt="" />
                      <img className='cursor-pointer' src={twitter} alt="" />
                    </div>
               </nav>
           </div>
           }
    </div>
  )
}

export default Nav