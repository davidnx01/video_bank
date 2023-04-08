import React from 'react';
import { BsCameraVideo, BsBell, BsSearch, BsMic } from "react-icons/bs";

const UpperNavigation = () => {
  return (
    <div className='w-full flex flex-row items-center justify-end'>
      <div className='w-[947px] flex flex-row justify-between items-center py-4 pr-8'>
        <div className='w-[442px] relative'>
          <input 
            placeholder='Explore'
            className='py-3 px-4 outline-none w-full pl-14 text-sm text-white'
          />
          <BsSearch 
            size={16}
            className='
              absolute
              left-6
              top-[50%]
              -translate-y-[50%]
              text-gray-400
              cursor-pointer
              hover:text-gray-300 
              transition 
              duration-200
            '
          />
          <div 
            className='
              w-[34px]
              h-[34px]
              absolute
              right-2
              top-[50%]
              -translate-y-[50%]
              border
              rounded-full
              flex
              items-center
              justify-center
            '
          >
            <BsMic 
              className='
                text-gray-400
                cursor-pointer
                hover:text-gray-300 
                transition 
                duration-200
              '
              size={20}
            />
          </div>
        </div>

        <div className='flex flex-row items-center justify-end gap-8'>
          <BsCameraVideo 
            size={21} 
            className="
              text-gray-400 
              cursor-pointer 
              hover:text-gray-300 
              transition 
              duration-200
            "/>
          <BsBell 
            size={21} 
            className="
              text-gray-400 
              cursor-pointer 
              hover:text-gray-300 
              transition 
              duration-200"
            />
          <img 
            src="/images/Profile.png" 
            alt="Profile" 
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}

export default UpperNavigation