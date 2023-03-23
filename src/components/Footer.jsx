import React from 'react'
import logo from '../images/logo-bookmark.svg'
import twitter from '../images/icon-twitter.svg'
import facebook from '../images/icon-facebook.svg'
const Footer = () => {
  return (
    <div className='bg-blue-800 py-6 px-10'>
        <div className='flex flex-col md:flex-row items-center gap-10 md:justify-between'>
            <div className='flex flex-col md:flex-row gap-28 items-center'>
            <img src={logo} alt="" />
            <ul className='flex flex-col text-gray-300 md:flex-row gap-10'>
                    <a className='uppercase text-sm' href="#">features</a>
                    <a className='uppercase text-sm' href="#">pricing</a>
                    <a className='uppercase text-sm' href="#">contact</a>
            </ul>
            </div>
            <div className='flex  md:flex-row gap-10'>
                <img className='cursor-pointer' src={twitter} alt="" />
                <img className='cursor-pointer' src={facebook} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Footer