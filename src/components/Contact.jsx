import React from 'react'

const Contact = () => {
  return (
    <div className='py-10 flex flex-col gap-6 text-white bg-blue-500'>
     <div className='flex flex-col items-center gap-3'>
        <p className='tracking-[5px] text-[10px]'>35,000+ ALREADY JOINED </p>
        <h1 className='font-bold text-center'>Stay up-to-date with what <br /> we're doing</h1>
     </div>
     
         <form className='flex flex-col items-center justify-center md:flex-row gap-3'>
              <input className='py-2 px-3 rounded-md text-black outline-none' type="text" placeholder='Enter your email address  text-sm ' />
              <button className='bg-red-500 px-16 py-2 md:px-3  rounded-md text-white'>Contact Us</button>
         </form>
     

    </div>
  )
}

export default Contact