import React from 'react'
import { rider } from '../data'
import {motion} from 'framer-motion'


const imageVariant = {
    hidden: {
        x: '-100vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring', stiffness: 10, duration: 1
        }
    }
}
const imageTextVariant = {
    hidden: {
        y: '100vh',
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring', stiffness: 10, duration: 1
        }
    }
}
const textVariant = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring', stiffness: 10, duration: 0.4
        }
    }
}

const Secfour = () => {
  return (
    <div className='w-4/5 mx-auto md:w-3/5'>
            {rider.map((ride)=>{
                const {id, text, price, image} = ride
                return(
                <motion.div
                    transition= {{staggerChildren: 0.3}}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:false, amount: 0.1}}
                    key={id} className='flex flex-col justify-between text-center mx-auto md:flex-row'>
                    <div 
                        className='w-[100%] p-7 bg-[#ffffff]'>
                        <div className=' py-3 border-b-2 border-[#7d7987]'>
                            <motion.img 
                                variants={imageVariant}
                                className='mx-auto' src={image} alt="Bike" 
                            />
                        </div>
                        <div className='flex flex-row text-center justify-between mx-7'>
                            <motion.div 
                                variants={imageTextVariant}
                                className='pt-3'>
                                <p>{text}</p>
                                <p>{price}</p>
                            </motion.div>
                            <p className='flex text-center w-[70px] h-[27px] justify-center bg-gradient-to-r my-auto from-[#ffbd37] to-[#e5e7eb] rounded-full'>Order</p>
                        </div>
                    </div>
                    <motion.div 
                    variants= {textVariant}
                    className='w-[100%] flex flex-col justify-center text-center mx-auto max-w-md'>
                        <h1 className='text-[27px] font-bold'>Hybrid Bikes</h1>
                        <p className='text-[18px] py-5 text-[#7d7987]'>Dummy Text progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                        <p className='border-2 border-[#fcb72b] text-[18px] text-[#fcb72b] mx-auto max-w-fit px-10 py-2 rounded-full'>Learn more</p>
                    </motion.div>
                </motion.div>
                )
            })}
    </div>
  )
}

export default Secfour