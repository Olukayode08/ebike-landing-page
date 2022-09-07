import React from 'react'
import { rider } from '../data'

const Secfour = () => {
  return (
    <div className='w-4/5 mx-auto md:w-3/5'>
            {rider.map((ride)=>{
                const {id, text, price, image} = ride
                return(
                <div key={id} className='flex flex-col justify-between text-center mx-auto md:flex-row'>
                    <div className='w-[100%] p-7 bg-[#ffffff]'>
                        <div className=' py-3 border-b-2 border-[#7d7987]'>
                            <img className='mx-auto' src={image} alt="Bike" />
                        </div>
                        <div className='flex flex-row text-center justify-between mx-7'>
                            <div className='pt-3'>
                                <p>{text}</p>
                                <p>{price}</p>
                            </div>
                            <p className='flex text-center w-[70px] h-[27px] justify-center bg-gradient-to-r my-auto from-[#ffbd37] to-[#e5e7eb] rounded-full'>Order</p>
                        </div>
                    </div>
                    <div className='w-[100%] flex flex-col justify-center text-center max-w-md md:text-left'>
                        <h1 className='text-[30px] text-[#7d7987]'>Hybrid Bikes</h1>
                        <p className='text-[19px] py-5 text-[#7d7987]'>Dummy Text progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                        <p className='border-2 border-[#fcb72b] text-[18px] text-[#fcb72b] mx-auto max-w-fit px-10 py-2 rounded-full'>Learn more</p>
                    </div>
                </div>
                )
            })}
    </div>
  )
}

export default Secfour