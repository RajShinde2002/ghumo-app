import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs' //these are all icons 
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'

const Navbar = () =>{
    const [nav, setNav] = useState(false);
    const[logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    };
    return (
        <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white' >
            <div>
                <h1 className={logo ? 'hidden ' : 'block'}><a href='#'>GHUMO</a></h1>
            </div>
            <ul className='hidden md:flex'>
                <li className='cursor-pointer hover:text-stone-300'>Home</li>
                <li className='cursor-pointer hover:text-stone-300'>Destinations</li>
                <li className='cursor-pointer hover:text-stone-300'>Travel</li>
                <li className='cursor-pointer hover:text-stone-300'>View</li>
                <li className='cursor-pointer hover:text-stone-300'>Book</li>
            </ul>
            <div className='hidden md:flex'>
            <BiSearch  className='mr-3 cursor-pointer' size={20}/>
            <BsPerson className='cursor-pointer' size={20}/>
            </div>
            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? <AiOutlineClose size={20} className='text-black' /> : <HiOutlineMenuAlt4 size={20}/>}
            </div>
            {/* Mobile Menu Dropdown */}
            <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col text-black': 'absolute left-[-100%]'}>
                <ul>
                    <h1>GHUMO</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>Destinations</li>
                <li className='border-b'>Travel</li>
                <li className='border-b'>View</li>
                <li className='border-b'>Book</li>
                <div className='flex flex-col'>
                    <button className='my-6'>Search</button>
                    <button>Account</button>
                </div>
                <div className='flex justify-between my-6'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaInstagram className='icon' />
                    <FaPinterest className='icon' />
                    <FaYoutube className='icon' />
                </div>
                </ul>
            </div>

        </div>
    )
}

export default Navbar