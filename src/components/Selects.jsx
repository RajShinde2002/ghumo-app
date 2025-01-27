import React from 'react'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import Maldives from '../assets/maldives.jpg'
import Keywest from '../assets/keywest.jpg'
import Borabora from '../assets/borabora.jpg'
import Borabora2 from '../assets/borabora2.jpg'
import SelectsCard from './SelectsCard'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        
    <SelectsCard bg={Borabora} text='BoraBora'/>
    <SelectsCard bg={Borabora2} text='Antigua'/>
    <SelectsCard bg={Keywest} text='Keywest'/>
    <SelectsCard bg={Maldives} text='Maldives'/>
    <SelectsCard bg={Maldives2} text='Jamaica'/>
    <SelectsCard bg={Maldives3} text='Cozumel'/>

    </div>
  )
}

export default Selects