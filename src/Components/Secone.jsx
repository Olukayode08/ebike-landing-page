import React from 'react'
import Helmet from '../bikeImages/57535-helmet-requirement 1 (1).png'
import {AiOutlineSearch} from 'react-icons/ai'
import {motion} from 'framer-motion'


const Secone  = () => {
  return (
    <>
    <div className='w-full mx-auto md:w-4/5'>
    <div className='flex flex-col justify-between text-center md:flex-row'>
      <motion.div 
      className='w-[100%] px-4 flex flex-col justify-center text-center md:text-left'
      initial={{x: '-100vw'}}
      animate={{x: 0}}
      transition={{type: 'spring', stiffness: 120, duration: 1 }}
      >
        <h1 className='text-5xl text-[#233348] font-[500]'>Your Bike Electric Update</h1>
        <p className='text-xl text-[#7d7987] my-3'>Dummy text progressive, and affordable healthcare, accessible on mobile and online for everyone</p>  
        <div className='flex text-center w-[90%] md:w-[300px] h-[50px] justify-center mb-[30px] border-2 border-[#233348] rounded-full md:mx-0'>
          <AiOutlineSearch className='w-[20px] mt-[15px] mr-2 h-[20px]'/>
          <input className='border-none focus:outline-none w-[240px] bg-transparent' placeholder='Search bike or anything' />
          <p className='flex text-center w-[70px] h-[27px] justify-center bg-gradient-to-r my-auto from-[#ffbd37] to-[#e5e7eb] shrink-0 rounded-full'>Find</p>
        </div>
      </motion.div>
      <motion.div 
      className='w-[100%] flex justify-center text-center' 
      initial={{x: '100vw'}}
      animate={{x: 0}}
      transition={{type: 'spring', stiffness: 70, duration: 1 }}
      >
        <img src={Helmet} alt="Bike" className='mb-[90px]' />
      </motion.div>
    </div>
    </div>
    </>
  )
}

export default Secone