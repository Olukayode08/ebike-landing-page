import React from 'react'
import {motion} from 'framer-motion'

const headerVariant = {
    hidden:{
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
    },
    transition: {type: 'tween', duration: 2}
}
const textVariant = {
    hidden:{
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
    },
    transition: {type: 'spring', stiffness: 20, duration: 2}
} 

const Footer = () => {
  return (
    <motion.div 
        transition={{staggerChildern: 0.3}}
        initial= 'hidden'
        whileInView= 'visible'
        viewport={{once:false, amount:0.1}}
        className='bg-[#fcb72b] text-white font-semi-bold flex flex-col justify-between text-center p-10 md:flex-row-reverse'>
        <div className='w-full flex text-center items-center justify-between mx-auto my-10 max-w-md'>
            <motion.ul variants={textVariant} className=''>
                <li className='text-lg font-bold'><a href="#">Company</a></li>
                <li className='py-1'><a href="#">Product</a></li>
                <li className='py-1'><a href="#">Bike Type</a></li>
                <li className='py-1'><a href="#">About us</a></li>
                <li className='py-1'><a href="#">Contact</a></li>
            </motion.ul>
            <motion.ul variants={textVariant} className=''>
                <li className='text-lg font-bold'><a href="#">Help</a></li>
                <li className='py-1'><a href="#">Help center</a></li>
                <li className='py-1 shrink-0'><a href="#">Contact support</a></li>
                <li className='py-1'><a href="#">Instructions</a></li>
                <li className='py-1'><a href="#">How it works</a></li>
            </motion.ul>
        </div>
        <motion.div 
            variants={headerVariant}
            className='w-full my-5 flex flex-col text-center justify-center mx-auto max-w-md md:text-left'>
            <p className='text-xl font-bold md:shrink-0'><span className='text-[#fcb72b] font-bold text-xl bg-white px-3 py-1 rounded-full'>B</span> eBike</p>
            <p className='py-5 text-xl'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
            <p>©eBike 2021. All rights reserved</p>
        </motion.div>
    </motion.div>
  )
}

export default Footer