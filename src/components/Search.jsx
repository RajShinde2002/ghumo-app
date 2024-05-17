import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex-col justify-evenly'>
            <div>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, reiciendis!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga consectetur quibusdam maiores sunt? Vitae harum, dolorum tempore quae ullam, debitis possimus molestias commodi est necessitatibus odio blanditiis eligendi praesentium sit autem eos alias culpa quas vel ipsum? Minus earum temporibus et recusandae ipsum architecto esse velit illum in dolor. Ratione, voluptatem consequuntur. Nobis voluptas, totam fugit ea mollitia ducimus. Eveniet nostrum reprehenderit aspernatur quia hic sed voluptates maiores cupiditate dolores!</p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'><button><RiCustomerService2Fill size={30}/></button>
            <div>

            <h3 className='py-2'>LEADING SERVICE</h3>
            <p className='py-1'>All Inclusive Company for more than 20 years in a row</p></div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center'><button><MdOutlineTravelExplore size={30}/></button>
            <div>

            <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
            <p className='py-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, non.</p></div>
            </div>
            </div>
            <div></div>
        </div>
        <div className='border text-center'>
            <p className='pt-2 cursor-pointer'>REFER AND EARN</p>
            <p className='py-4 cursor-pointer'>OFFERS JUST FOR YOU</p>
            <p className='bg-gray-800 text-white rounded-md mx-2 cursor-pointer'>BOOK NOW</p>
        <form className='w-full'>
            <div className='flex flex-col my-2 mx-2 text-left'>
                <label>Destination</label>
                <select className='border rounded-md p-2'>
                    <option>Grande Antigua</option>
                    <option>Maldives</option>
                    <option>KeyWest</option>
                    <option>Borobora</option>
                </select>
            </div>
            <div className='flex flex-col my-4 mx-2 text-left'>
                <label>Check-in</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <div className='flex flex-col my-2 mx-2 text-left'>
                <label>Check-out</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <button className='my-4 mx-2'>Availability</button>
        </form>
        </div>
    </div>
  )
}

export default Search