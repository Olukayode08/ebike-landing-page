import React from 'react'
import bike from '../bikeImages/bikeone.png'

const Secthree = () => {
  return (
    <>
        <div className='w-4/5 mx-auto my-[100px]'>
        <h1 className='text-[20px] text-center text-[#233348] font-bold md:text-left'>Other Types Of Bikes</h1>
        <div className='flex justify-center text-center md:flex md:flex-row'>
                <div className='flex justify-center text-center flex-col'>
                    <img src={bike} alt="Bike" className='bg-[#ffffff] shadow-md p-4 mx-auto hover:border-2 border-[#ffbd37] md:mx-2'/>
                    <p className='text-center  py-4'>Hybrid bike</p>
                </div>
                <div className='hidden justify-center text-center md:flex md:flex-col'>
                    <img src={bike} alt="Bike" className='bg-[#ffffff] shadow-md p-4 mx-auto hover:border-2 border-[#ffbd37] md:mx-2'/>
                    <p className='text-center py-4'>Hybrid bike</p>
                </div>
                <div className='hidden justify-center text-center md:flex md:flex-col'>
                    <img src={bike} alt="Bike" className='bg-[#ffffff] shadow-md p-4 mx-auto hover:border-2 border-[#ffbd37] md:mx-2'/>
                    <p className='text-center py-4'>Hybrid bike</p>
                </div>
                <div className='hidden justify-center text-center md:flex md:flex-col'>
                    <img src={bike} alt="Bike" className='bg-[#ffffff] shadow-md p-4 mx-auto hover:border-2 border-[#ffbd37] md:mx-2'/>
                    <p className='text-center py-4'>Hybrid bike</p>
                </div>
                <div className='hidden justify-center text-center md:flex md:flex-col'>
                    <img src={bike} alt="Bike" className='bg-[#ffffff] shadow-md p-4 mx-auto hover:border-2 border-[#ffbd37] md:mx-2'/>
                    <p className='text-center py-4'>Hybrid bike</p>
                </div>
        </div>
        </div>
    </>

  )
}

export default Secthree