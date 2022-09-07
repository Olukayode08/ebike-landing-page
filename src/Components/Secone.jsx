import React from 'react'
import Helmet from '../bikeImages/57535-helmet-requirement 1 (1).png'
import {AiOutlineSearch} from 'react-icons/ai'


const Secone  = () => {
  return (
    <>
    <div className='w-4/5 mx-auto'>
    <div className='flex flex-col justify-between text-center md:flex-row'>
      <div className='w-[100%] flex flex-col justify-center text-center md:text-left'>
        <h1 className='text-5xl text-[#233346] font-[700]'>Your Bike Electric Update</h1>
        <p className='text-2xl text-[#7d7987] my-3'>Dummy text progressive, and affordable healthcare, accessible on mobile and online for everyone</p>  
        <div className='flex text-center mx-auto w-[350px] h-[50px] justify-center mb-[30px] border-2 border-black rounded-full md:mx-0'>
          <AiOutlineSearch className='w-[20px] mt-[15px] mr-2 h-[20px]'/>
          <input className='border-none focus:outline-none bg-transparent' placeholder='Search bike or anything' />
          <p className='flex text-center w-[70px] h-[27px] justify-center bg-gradient-to-r my-auto from-[#ffbd37] to-[#e5e7eb] rounded-full'>Find</p>
        </div>
      </div>
      <div className='w-[100%] flex justify-center text-center' >
        <img src={Helmet} alt="Bike" className='mb-12' />
      </div>
    </div>
    </div>
    </>
  )
}

export default Secone