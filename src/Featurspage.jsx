import React from 'react'
import Features from './components/Features'
const Featurspage = ({setIsactive,isactive}) => {
  return (
    <div>
        <Features isactive={isactive} setIsactive={setIsactive}/>
    </div>
  )
}

export default Featurspage