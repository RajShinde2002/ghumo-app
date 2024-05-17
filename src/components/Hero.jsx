import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted></video>
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                <h1>First Class Travel</h1>
                <h2 className='py-4'>Top 1% locations worldwide</h2>
                <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border py-1 px-2 bg-white rounded-xl'>
                    <div>
                        <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none text-stone-500' type="text" placeholder='Search Destination'/>
                    </div>
                    <div>
                        <button><AiOutlineSearch size={20} className='icon' style={{color: 'white'}}/></button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Hero