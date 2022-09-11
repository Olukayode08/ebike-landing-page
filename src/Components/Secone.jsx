import React, {useState} from 'react'
import Helmet from '../bikeImages/57535-helmet-requirement 1 (1).png'
import {AiOutlineSearch} from 'react-icons/ai'
import {motion} from 'framer-motion'

  const imageVariant = {
    initial:{
      x: 200,
      opacity:0
    },
    final:{
      x:0,
      opacity:1
    },
    transition:{ type: 'spring', stiffness: 10 , duration: 1 }
  }
   const textVariant = {
     initial: {
       x: '-100vw',
     },
     final: {
       x: 0,
     },
     transition: { type: 'spring', stiffness: 10, duration:1 },
   }
   const dummyVariant = {
     initial: {
       y: '-100vh',
       opacity: 0
     },
     final: {
       y: 0,
       opacity:1
     },
     transition: { type: 'spring', stiffness: 10, duration:1 },
   }



const Secone  = () => {
  return (
    <>
    <div className='w-full mx-auto md:w-4/5'>
    <div className='flex flex-col justify-between text-center md:flex-row'>
      <motion.div 
        className='w-[100%] px-4 flex flex-col justify-center text-center md:text-left'
        transition={{ staggerChildren: 0.3 }}
        initial='initial'
        whileInView={'final'}
        exit = {{opacity: 0, duration: 2}}
        viewport={{once:false , amount:0.1}}
      >
        <motion.h1 
          variants={textVariant}
          className='text-5xl text-[#233348] font-[500]'>
          Your Bike Electric Update
        </motion.h1>
        <motion.p 
          variants={dummyVariant}
          className='text-xl text-[#7d7987] my-3'>
          Dummy text progressive, and affordable healthcare, accessible on mobile and online for everyone
        </motion.p>  
        <motion.div 
          variants={dummyVariant}
          className='relative flex gap-1 text-center mx-auto w-[70%] h-[50px] justify-center mb-[30px] border-2 border-[#233348] rounded-full md:mx-0'>
          <AiOutlineSearch className='hidden absolute top-4 left-4 md:block '/>
          <input className='border-none focus:outline-none w-[240px] bg-transparent' placeholder='Search bike or anything' />
          <p className='flex text-center absolute top-3 right-2 w-[70px] h-[27px] justify-center bg-gradient-to-r my-auto from-[#ffbd37] to-[#e5e7eb] shrink-0 rounded-full'>Find</p>
        </motion.div>
      </motion.div>
      <motion.div
      variants={imageVariant}
        initial='initial'
        whileInView='final'
        viewport={{once: false, amount: 0.1}}
        className='w-[100%] flex justify-center text-center' 
      >
        <img src={Helmet} alt="Bike" className='mb-[90px]'/>
      </motion.div>
    </div>
    </div>
    </>
  )
}

export default Secone