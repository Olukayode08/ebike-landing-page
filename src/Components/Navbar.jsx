import React, {useState} from 'react'
import { navData } from '../data'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [active, setActive] = useState(false)

  const toggle = ()=>{
    setActive(!active)
  }

  return (
    <>
    <div className='h-[120px] w-screen mx-auto md:w-4/5'>
          <div className='flex justify-between text-center p-5 shadow-lg relative'>
            <p className='text-3xl text-[#233348] font-semi-bold md:shrink-0'> <span className='bg-[#fcb72b] font-bold text-3xl text-white px-3 py-1 rounded-3xl'>B</span> eBike</p>
              <ul className='hidden justify-between text-center text-[#7d7987] md:flex'>
                {navData.map((data)=>{
                const {id, name, link} = data
                return(
                  <li className='text-center text-[18px] shrink-0 my-1 px-2 justify-center' key={id}><a href={link}>{name}</a></li>
                )
                })}
              </ul>
          </div>
          {/* Hamburger Menu */}
          <button onClick={toggle} className={'flex absolute text-xl right-10 top-10 md:hidden'}>
            {active ? <AiOutlineClose/> : <AiOutlineMenu />}
          </button>

          {/* Mobile Navigation */}
          <div className={active ? 'h-full w-screen absolute top-0 bg-[#fcb72b] left-0 flex flex-col text-center justify-center': 'absolute left-[-100%]'}>
          <button onClick={toggle} className={'flex absolute right-10 top-10 text-2xl'}>
            {active ? <AiOutlineClose/> : <AiOutlineMenu />}
          </button>
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