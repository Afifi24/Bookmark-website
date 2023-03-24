import React from 'react'
import imgsimple from '../images/illustration-features-tab-1.svg'

const Simplebook = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row gap-20 md:gap-2 my-20 items-center '>
           <div id="image" className='flex-1 flex items-center justify-center relative '>
            <img className='w-96 z-10' src={imgsimple} alt="" />
             <div className='absolute -bottom-10 right-12 md:right-48 w-full rounded-tr-full rounded-br-full h-60 bg-SoftBlue z-0'></div>
           </div>
           <div id="content" className='flex flex-1  items-center justify-center text-center md:text-start md:items-start flex-col gap-6'>
            <h1 className='text-xl md:text-3xl font-bold text-VeryDarkBlue'>Bookmark in one click</h1>
            <p className='max-w-sm md:max-w-md text-sm md:text-[16px] leading-[27px] text-GrayishBlue'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
            <button className='px-4 py-2 hidden md:flex bg-SoftBlue rounded-md text-white '>More Info</button>
           </div>
            </div>
    </div>
  )
}

export default Simplebook