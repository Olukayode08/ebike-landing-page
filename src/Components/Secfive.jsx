import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import 'swiper/css/navigation';

import 'swiper/css';
import { feedback } from '../data';


const Secfive = () => {
  return (
    
    
  <div>
    <div className='max-w-md bg-[#fcb72b] p-7 rounded-lg mx-auto my-10'>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation = {{
            prevEl: '.swiper-custom-navigation-prev',
            nextEl: '.swiper-custom-navigation-next',
      }}
          // className='mySwiper'
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
      <div className='flex justify-center text-center gap-[30px] mt-8 '>
        <BsArrowLeft
          className='swiper-custom-navigation swiper-custom-navigation-prev backNavigate'
          size={35}
        />
        <BsArrowRight
          className='swiper-custom-navigation swiper-custom-navigation-next frontNavigate'
          size={35}
        />
      </div>
    </div>
  );
}
export default Secfive