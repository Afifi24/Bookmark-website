import React, { useState } from 'react'
import Faqitem from './Faqitem'
const Faq = () => {
    const data =[
        {
            questions:'What is Bookmark?',
            answers:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae eos vel delectus provident! Voluptatibus cumque minima eum inventore exercitationem?'
        },
        {
            questions:'How can i request a new browser?',
            answers:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae eos vel delectus provident! Voluptatibus cumque minima eum inventore exercitationem?'
        },
        {
            questions:'Is there a mobile app?',
            answers:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae eos vel delectus provident! Voluptatibus cumque minima eum inventore exercitationem?'
        },
        {
            questions:'What about other Chromium browsers?',
            answers:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae eos vel delectus provident! Voluptatibus cumque minima eum inventore exercitationem?'
        },
    ]
  return (
    <div className='py-20'>
         <div className='flex flex-col items-center gap-4 text-center'>
            <h1 className='font-bold text-2xl md:text-3xl text-VeryDarkBlue'>Frequently Asked Questions</h1>
            <p className='md:max-w-md max max-w-sm text-sm md:text-[16px] text-GrayishBlue leading-[27px]'>Here are some of our FAQs. if you have any other questions you'd like answered please feel free to email us.</p>
         </div>
         <div id='faq' className='flex items-center flex-col  justify-center mt-10'>
                
                  {
                    data.map(item=>(
                        <Faqitem item={item} key={item.questions}/>
                    ))
                  }
                  
                  <button className='px-4 mt-10 py-2  md:flex bg-SoftBlue rounded-md text-white '>More Info</button>
         </div>
         
    </div>
  )
}

export default Faq