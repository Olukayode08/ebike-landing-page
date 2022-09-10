import React, {useState} from 'react'
import { bikes } from '../data'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import {motion} from 'framer-motion'

const Sectwo = () => {
  return (
    <>
    <div className='relative w-4/5 mx-auto my-10'>
    <Swiper 
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }}

      navigation = {{
            prevEl: '.swiper-custom-navigation-prev',
            nextEl: '.swiper-custom-navigation-next',
      }}
          className='mySwiper'
    >


    <div className='flex flex-col text-center justify-center mx-auto md:flex-row'>
        {bikes.map((data)=>{
            const {id, name, text, price, image} = data
            return(
              <SwiperSlide key={id}>
              <div className='bg-[#ffffff] flex flex-col text-center justify-center shadow-md h-[350px] w-[270px] mx-auto p-4 md:mx-1'>
                <div className=' pb-3 border-b-2 border-[#7d7987]'>
                  <h3 className='text-xl font-semibold'>{name}</h3>
                  <img className='mx-auto' src={image} alt="Bike" />
                </div>
                <div className='flex flex-row text-center justify-between mx-7'>
                  <div>
                    <p>{text}</p>
                    <p>{price}</p>
                  </div>
                  <p className='flex text-center w-[70px] h-[27px] justify-center bg-gradient-to-r my-auto from-[#ffbd37] to-[#e5e7eb] rounded-full'>Order</p>
                </div>
              </div>
              </SwiperSlide>

            )
        })}
    </div>
    </Swiper>

        <div className='flex flex-row justify-between absolute -bottom-[50px] right-20'>
          <button>
            <AiOutlineArrowLeft  className='swiper-custom-navigation swiper-custom-navigation-prev backNavigate bg-[#f2b72b] px-3 py-1 mx-1 rounded-full' size={45} />
          </button>
          <button>
            <AiOutlineArrowRight className='swiper-custom-navigation swiper-custom-navigation-next frontNavigate bg-[#f2b72b] px-3 py-1 mx-1 rounded-full' size={45}/>
          </button>
        </div>
    
    </div>

    </>

  )

}

export default Sectwo