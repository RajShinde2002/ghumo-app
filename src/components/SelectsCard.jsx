import React from 'react'

const SelectsCard = (props) => {
  return (
    <div className='relative overflow-hidden'>
    <img className='w-full h-full object-cover hover:scale-110 z-10 relative transition-all' src={props.bg} alt="/" />
    <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    <p className='left-4 bottom-4 text-xl text-white absolute'>{props.text}</p>
    </div>
</div>
  )
}

export default SelectsCard