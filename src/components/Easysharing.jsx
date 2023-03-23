import React from 'react'
import sharing from '../images/illustration-features-tab-3.svg'
const Easysharing = () => {
  return (
    <div>
       <div className='flex flex-col md:flex-row gap-20 md:gap-2 my-20 items-center '>
           
           <div id="image" className='flex-1 flex items-center justify-center relative '>
            <img className='w-96 z-10' src={sharing} alt="" />
             <div className='absolute -bottom-10 right-12 md:right-48 w-full rounded-tr-full rounded-br-full h-60 bg-blue-600 z-0'></div>
           </div>
           <div id="content" className='flex flex-1  items-center justify-center text-center md:text-start md:items-start flex-col gap-6'>
            <h1 className='text-xl md:text-3xl font-bold'>Share your bookmark</h1>
            <p className='max-w-sm md:max-w-md text-sm md:text-[16px] leading-[27px] text-gray-500'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
            <button className='px-4 py-2 hidden md:flex bg-blue-500 rounded-md text-white '>More Info</button>
           </div>
            </div>
    </div>
  )
}

export default Easysharing