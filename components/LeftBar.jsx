import React from 'react'
import { RiMenu2Fill } from "react-icons/ri"
import SideBarList from './SideBarList'

const LeftBar = () => {
  return (
    <aside className="h-[900px] overflow-auto w-full p-[22px] rounded-3xl relative z-10">
        <div className='flex flex-row items-center gap-3'>
            <div className='h-3 w-3 rounded-full bg-orange-500 cursor-pointer'></div>
            <div className='h-3 w-3 rounded-full bg-yellow-500 cursor-pointer'></div>
            <div className='h-3 w-3 rounded-full bg-green-500 cursor-pointer'></div>
        </div>

        <div className='mt-12 flex flex-row gap-5 items-center mb-6'>
            <RiMenu2Fill size={20} className='text-gray-300 cursor-pointer' />
            <p className='text-white text-3xl font-bold'>Papaya</p>
        </div>

        <SideBarList />
    </aside>
  )
}

export default LeftBar