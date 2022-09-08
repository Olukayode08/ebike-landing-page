import React, {useState} from 'react'
import { navData } from '../data'
import { Twirl as Hamburger } from 'hamburger-react'
const Navbar = () => {
  const [isOpened , setIsOpened] = useState(false)
  return (
    <>
        <div className='h-[70px] w-full sticky bg-white mb-10 top-0 left-0 z-10 px-2  shadow-lg flex flex-col text-center justify-center md:mx-auto md:w-4/5 md:shadow-none'>
          <div className='flex justify-between text-center relative'>
            <p className='text-3xl text-[#233348] font-semi-bold md:ml-[60px] md:shrink-0'> <span className='bg-[#fcb72b] font-bold text-3xl text-white px-3 py-1 rounded-3xl'>B</span> eBike</p>
              <ul className='hidden justify-between text-center text-[#7d7987] last-child:font-bold md:mr-[60px] md:flex'>
                {navData.map((data)=>{
                const {id, name, link} = data
                return(
                  <li className='text-center text-[16px] shrink-0 my-1 px-2 justify-center' key={id}><a href={link}>{name}</a></li>
                )
                })}
              </ul>
          </div>

          {/* Hamburger Menu */}
          <div className={isOpened ? 'flex fixed z-50 text-xl right-3 top-5 md:hidden': 'flex absolute z-50 text-xl right-10 top-4 md:hidden'}>
          <Hamburger
            color='#944d06'
            toggled={isOpened}
            toggle={setIsOpened}
            easing='ease-in'
            size={20}
            direction='left'
          />
          </div>

          {/* Mobile Navigation */}
          <div className={isOpened ? 'transition-all ease-in delay-[0.3s] h-screen w-full z-40 fixed top-0 bg-[#fcb72b] left-0 flex flex-col text-center justify-center md:hidden': 'transition-all ease-out delay-[0s] absolute left-[-100%] md:hidden'}>
            <ul>
              {navData.map((data)=>{
                const {id, name, link} = data
                return(
                  <li className='text-white text-[18px] my-5' key={id}><a href={link}>{name}</a></li>
                )
              })}
            </ul>
          </div>
        </div>
    </>
  )
}

export default Navbar