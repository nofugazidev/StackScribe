import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/heroimage.jpg'

const Hero: React.FC = () => {
  return (
    <>
      <main className='mx-auto max-w-[1400px]'>
        <nav className='flex items-center justify-between p-4'>
            <div className="logo">
                <Link to="/" className="cursor-pointer md:text-4xl text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">StackScribe</Link>
            </div>

            <div className="btns flex gap-4 items-center">
                <Link to='/login' className='hidden md:flex text-sm md:text-lg capitalize font-medium'>login</Link>
                <Link to='/register' className='text-sm md:text-lg capitalize font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white md:p-2 p-1 rounded'>get started</Link>
            </div>
        </nav>


        <div className="hero-section flex flex-col items-center justify-center mt-10 md:mt-20 gap-5 md:gap-10">
            <h1 className='text-xl md:text-5xl font-bold w-[90%] md:w-[70%] leading-normal md:leading-[60px] text-left md:text-center'>Stay Ahead in Tech. Learn, Build, and Share with Developers Worldwide</h1>
            <p className='w-[90%] md:w-[70%] leading-normal text-left md:text-center text-gray-500 font-medium text-sm md:text-lg'>Fresh insights on JavaScript, React, DevOps, AI, and everything that powers the modern web.</p>
            <img src={heroImage} alt="hero-image" className='w-[90%] md:w-[50%] md:rounded-t-2xl md:rounded-b-none rounded-2xl block object-cover' />
        </div>
      </main>
    </>
  )
}

export default Hero
