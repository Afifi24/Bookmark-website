import React, { useState } from 'react'
import errorimg from '../images/icon-error.svg'

const Contact = () => {
  const [error,setError] = useState('')
  const [input,setInput] = useState('')
  const [bg,setBg] = useState(false)

  const Onsubmit =(e)=>{
    e.preventDefault()
    if(!input.includes('@gmail')){
       setError('whoops make sure it s an email')
       setBg(true)
    }else{
      setError('')
      setBg(false)

    }
  }
  return (
    <div className='py-12 flex flex-col gap-8 text-white bg-SoftBlue'>
     <div className='flex flex-col items-center gap-3'>
        <p className='tracking-[5px] text-[10px]'>35,000+ ALREADY JOINED </p>
        <h1 className='font-bold text-center text-2xl'>Stay up-to-date with what <br /> we're doing</h1>
     </div>
     
         <form className='flex flex-col items-center justify-center md:flex-row gap-3'>
             <div className={`flex relative flex-col p-0.5 rounded-md ${bg? 'bg-SoftRed':''} `}>
             <input onChange={(e)=>setInput(e.target.value)} value={input} required className='py-2 px-3 rounded-md text-black outline-none' 
              type="text" placeholder='Enter your email address  text-sm ' />
              
              { bg &&
                <span className='text-white text-[10px] pl-1 pt-2'>{error}</span>
              }
              { bg &&
                <img className='w-5 absolute top-3 right-2' src={errorimg} alt="" />
              }
             </div>
              <button onClick={Onsubmit}  className='bg-SoftRed px-16 py-2 md:px-3  rounded-md text-white'>Contact Us</button>
         </form>
     

    </div>
  )
}

export default Contact