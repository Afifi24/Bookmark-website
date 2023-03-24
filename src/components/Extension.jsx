import React from 'react'
import google from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
import dotes from '../images/bg-dots.svg'
const Extension = () => {
  return (
    <div className=' pt-6 md:pt-10'>
         <div className='flex flex-col items-center gap-5 my-20 text-center '>
            <h1 className='font-bold text-2xl md:text-3xl text-VeryDarkBlue'>Download the exension</h1>
            <p className='max-w-sm md:max-w-md text-sm md:text-[16px] leading-[27px] text-GrayishBlue '>we ve got browssers in th e pipeline. Please do let us know if you ve got a favourite you'd like us to prioritize.</p>
         </div>
         <div id='cards' className='flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4  my-10  '>
             <div className='bg-white flex gap-2 items-center flex-col shadow-xl text-center  p-6 rounded-md mb-0 md:mb-10'>
                <img src={google} alt="" />
                <h1 className='font-bold text-VeryDarkBlue'>Add to Chrome</h1>
                 <p className='text-[12px] mb-4 text-GrayishBlue'>Minimum version 62</p>
                 <img className='max-w-sm w-48' src={dotes} alt="" />
                 <button className='py-2 text-sm px-6 mt-1 bg-SoftBlue text-white rounded-md hover:bg-transparent  border-2 border-transparent duration-200 hover:text-SoftBlue hover:border-SoftBlue hover:shadow-md hover:shadow-SoftBlue'>Add & Install Extension</button>
             </div>
             <div className='bg-white flex gap-2 items-center flex-col shadow-xl text-center  p-6 rounded-md '>
                <img src={firefox} alt="" />
                <h1 className='font-bold text-VeryDarkBlue'>Add to Firefox</h1>
                 <p className='text-[12px] mb-4 text-GrayishBlue'>Minimum version 55</p>
                 <img className='max-w-sm w-48' src={dotes} alt="" />
                 <button className='py-2 text-sm px-6 mt-1 bg-SoftBlue text-white rounded-md hover:bg-transparent  border-2 border-transparent duration-200 hover:text-SoftBlue hover:border-SoftBlue hover:shadow-md hover:shadow-SoftBlue'>Add & Install Extension</button>
             </div>
             <div className='bg-white flex gap-2 items-center flex-col shadow-xl text-center  p-6 rounded-md mt-0 md:mt-10'>
                <img src={opera} alt="" />
                <h1 className='font-bold text-VeryDarkBlue'>Add to Opera</h1>
                 <p className='text-[12px] mb-4 text-GrayishBlue'>Minimum version 46</p>
                 <img className='max-w-sm w-48' src={dotes} alt="" />
                 <button className='py-2 text-sm px-6 mt-1 bg-SoftBlue text-white rounded-md hover:bg-transparent  border-2 border-transparent duration-200 hover:text-SoftBlue hover:border-SoftBlue hover:shadow-md hover:shadow-SoftBlue'>Add & Install Extension</button>
             </div>

         </div>

    </div>
  )
}

export default Extension