import React from 'react'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-300 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
            <h1 className='cursor-pointer'>GHUMO</h1>
            <div className='flex justify-between w-full sm:max-w-[200px] my-4'>
            <FaFacebook className='icon hover:scale-110 transition-all' />
            <FaTwitter className='icon hover:scale-110 transition-all' />
            <FaInstagram className='icon hover:scale-110 transition-all' />
            <FaPinterest className='icon hover:scale-110 transition-all' />
            <FaYoutube className='icon hover:scale-110 transition-all' />
            </div>
            </div>
            <div className='flex justify-between'>
                <ul className='lg:flex cursor-pointer'>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
                <ul className='text-right lg:flex cursor-pointer'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer