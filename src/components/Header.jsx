import React from 'react'
import imgheader from '../images/illustration-hero.svg'
const Header = () => {
  return (
    <div>
        <div className='my-20 flex flex-col md:flex-row items-center  px-10  overflow-hidden md:ml-24  gap-20 md:gap-2'>
            <div id='content' className='flex order-2 md:order-1 flex-1 flex-col text-center md:text-start items-center justify-center md:items-start gap-6 '>
                <h1 className='  text-2xl md:text-4xl max-w-md font-bold '>A Simple Bookmark Manager </h1>
                <p className='max-w-md leading-[27px] text-gray-400 text-sm md:text-[16px]'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites  load instantly. Try it for free.</p>
                <div id='btn' className='flex items-center justify-center flex-row  gap-4'>
                    <button className=' border-2 text-white border-transparent font-semibold rounded-md px-4 py-2 hover:border-blue-500 shadow-sm hover:text-blue-500 hover:shadow-blue-500 text-xs duration-200 md:text-sm bg-blue-500 hover:bg-transparent '>Get it on Chrome</button>
                    <button className=' border-2 border-transparent bg-gray-100 text-gray-600 font-semibold rounded-md px-4 py-2 shadow-md hover:shadow-gray-400 hover:border-gray-500 hover:bg-transparent  md:text-sm text-xs  duration-200'>Get it on Firefox</button>
                </div>
            </div>
            <div id="imag" className='relative order-1 md:order-2 flex items-start justify-start flex-1'>
                <img className='z-10 relative w-full ' src={imgheader} alt="" />
                <div className='absolute left-28 h-56 md:h-48 md:left-24 lg:h-80 rounded-tl-full rounded-bl-full w-full z-0 bottom-0 lg:left-48 bg-blue-600'></div>
            </div>
        </div>
    </div>
  )
}

export default Header