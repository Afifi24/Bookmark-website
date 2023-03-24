import React from 'react'
import {Link,Route,Routes} from 'react-router-dom'

const Features = ({setIsactive,isactive}) => {
  return (
    <div className='my-20 space-y-20'>

        <div className='text-center flex flex-col items-center justify-center gap-6'>
            <h1 className='font-bold text-2xl text-VeryDarkBlue'>Features</h1>
            <p className='max-w-md text-sm md:text-[16px] mx-6 text-GrayishBlue leading-[27px] '>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div>
            <nav className='flex items-center justify-center '>
                <ul className='flex flex-col md:flex-row text-center md:text-start md:gap-20 md:border-b-2 pb-4 px-6 '>
                     <Link to={'/'} onClick={()=>setIsactive('simple')} className='text-gray-500 border-t border-b relative py-3 px-20 hover:text-red-500 duration md:border-none md:px-0 md:py-0'>Simple Bookmarking
                     { isactive==='simple'?
                      <div className='absolute bottom-0 md:-bottom-5 left-0 h-1 w-full bg-red-500 '></div>
                      :''
                     }
                     </Link>
                     <Link to={'/speedsearch'} onClick={()=>setIsactive('speed')} className='text-gray-500 md:border-none relative border-t border-b py-3 px-20 md:px-0 md:py-0  hover:text-red-500 duration'>Speedy Searching
                     { isactive==='speed'?
                      <div className='absolute bottom-0 md:-bottom-5 left-0 h-1 w-full bg-red-500 '></div>
                      :''
                     }
                     </Link>
                     <Link to={'/easysharing'} onClick={()=>setIsactive('sharing')} className='text-gray-500 border-t border-b relative  hover:text-red-500 duration md:border-none py-3 px-20 md:px-0 md:py-0'>Easy Sharing
                     { isactive==='sharing'?
                      <div className='absolute bottom-0 md:-bottom-5 left-0 h-1 w-full bg-red-500 '></div>
                      :''
                     }
                      </Link>
                </ul>
            </nav>
            
           
        </div>
    </div>
  )
}

export default Features