import React,{useState} from 'react'
import arrow from '../images/icon-arrow.svg'

const Faqitem = ({item}) => {
    const [isopen,setIsopen] = useState(false)

  return (
    <div>

               <div className='p-2 border-t border-b w-96 '>
                    <div onClick={()=>setIsopen(!isopen)} className='flex py-3 items-center justify-between  cursor-pointer'>
                    <h2  className='font-bold'>{item.questions}</h2>
                     <img className={`${isopen ? 'rotate-180':''} `} src={arrow} alt="" />
                    </div>
                    
                    {isopen ?
                        <p className='text-gray-400'>{item.answers}</p>
                        :''}
                </div> 
    </div>
  )
}

export default Faqitem