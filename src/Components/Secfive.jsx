import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import 'swiper/css/navigation';
import 'swiper/css';
import { feedback } from '../data';
import {motion} from 'framer-motion'
const imageVariant ={
  hidden: {
    y: '100vh',
    opacity: '0'
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'string', duration: 1, stiffness: 50, duration: 0.4
    }
  }
}
const textVariant ={
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'string', stiffness: 50, duration: 1, 
    }
  }
}
const Secfive = () => {
  return (
  <div

  >
    <div className='max-w-md bg-[#fcb72b] p-7 rounded-lg mx-auto my-5'>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation = {{
            prevEl: '.swiper-custom-navigation-prev',
            nextEl: '.swiper-custom-navigation-next',
      }}
    >
            {feedback.map(user =>(
                <SwiperSlide className='' key={user.id}>
                    <motion.div
                      transition={{staggerChildren: 0.3}}
                      initial= 'hidden'
                      whileInView = 'visible'
                      viewport={{once:false, amount: 0.1}}
                      className='flex text-center justify-center flex-col'>
                        <div>
                            <motion.img
                            variants={imageVariant}
                            className='border-2 border-white rounded-full mx-auto' src={user.image} alt="Biker" 
                            />
                            <motion.p 
                              variants={imageVariant}
                              className='text-[#fff] text-[23px] font-semi-bold shrink-0'>{user.name}
                            </motion.p>
                            <motion.p 
                              variants={textVariant}
                              className='text-[#fff] text-[20px]'>{user.position}
                            </motion.p>
                        </div>
                        <motion.p 
                          variants={textVariant}
                          className='text-[#ffffff]'>{user.text}
                        </motion.p>
                    </motion.div>
                </SwiperSlide>
            ))}
    </Swiper>
    </div>
      <div className='flex justify-center text-center mb-5 gap-[30px]'>
        <BsArrowLeft
          className='swiper-custom-navigation swiper-custom-navigation-prev backNavigate bg-[#fff] opacity-3 text-[#f2b72b] px-3 py-1 rounded-full'
          size={55}
        />
        <BsArrowRight
          className='swiper-custom-navigation swiper-custom-navigation-next frontNavigate bg-[#fff] text-[#f2b72b] px-3 py-1 rounded-full'
          size={55}
        />
      </div>
    </div>
  );
}
export default Secfive