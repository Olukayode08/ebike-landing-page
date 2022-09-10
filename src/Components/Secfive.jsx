import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import 'swiper/css/navigation';
import 'swiper/css';
import { feedback } from '../data';
import {motion} from 'framer-motion'
const containerVariant ={
  hidden: {
    y: '100vh',
    opacity: '0'
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'string', duration: 1, stiffness: 50, staggerChildren: 0.5
    }
  }
}


const Secfive = () => {
  return (
  <motion.div
  variants={containerVariant}
  initial= 'hidden'
  animate = 'visible'
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
                    <div className='flex text-center justify-center flex-col'>
                        <div>
                            <img className='border-2 border-white rounded-full mx-auto' src={user.image} alt="Biker" />
                            <p className='text-[#fff] text-[23px] font-semi-bold shrink-0'>{user.name}</p>
                            <p className='text-[#fff] text-[20px]'>{user.position}</p>
                        </div>
                        <p className='text-[#ffffff]'>{user.text}</p>
                    </div>
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
    </motion.div>
  );
}
export default Secfive