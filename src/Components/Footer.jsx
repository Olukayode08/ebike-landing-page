import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#fcb72b] text-white font-semi-bold flex flex-col justify-center text-center p-10 md:flex-row-reverse'>
        <div className='flex text-center justify-center mx-auto my-10 max-w-md'>
            <ul className='mx-[60px]'>
                <li className='text-lg font-bold'><a href="#">Company</a></li>
                <li className='py-1'><a href="#">Product</a></li>
                <li className='py-1'><a href="#">Bike Type</a></li>
                <li className='py-1'><a href="#">About us</a></li>
                <li className='py-1'><a href="#">Contact</a></li>
            </ul>
            <ul className='mx-[60px]'>
                <li className='text-lg font-bold'><a href="#">Help</a></li>
                <li className='py-1'><a href="#">Help center</a></li>
                <li className='py-1'><a href="#">Contact support</a></li>
                <li className='py-1'><a href="#">Instructions</a></li>
                <li className='py-1'><a href="#">How it works</a></li>
            </ul>
        </div>
        <div className='my-5 flex flex-col text-center justify-center mx-auto max-w-md md:text-left'>
            <p className='text-xl font-bold md:shrink-0'><span className='text-[#fcb72b] font-bold text-xl bg-white px-3 py-1 rounded-full'>B</span> eBike</p>
            <p className='py-5 text-xl'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
            <p>©eBike 2021. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer