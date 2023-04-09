import { navigationLinks } from '@/constants/navLinksConts'
import React from 'react'

const BottomNavigation = () => {
  return (
    <div className='w-full px-1 py-4 relative'>
      <div className='w-full absolute content-none h-full purple_filter bottom-5 border-b border z-9 opacity-70'></div>
      <div className='w-full absolute content-none h-[1px] bottom-1 left-0 purple_bottom_border z-11'></div>
        <ul className='flex flex-row w-full items-center justify-between text-gray-400 font-bold z-10 relative'>
          {navigationLinks.map((tab) => (
            <li key={tab.id} className='hover:text-gray-300 transition duration-200'>
              <a href={tab.link}>{tab.title}</a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default BottomNavigation