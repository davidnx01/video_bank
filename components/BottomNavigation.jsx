import React from 'react'

const BottomNavigation = () => {
  return (
    <div className='w-full px-1 py-4 relative'>
      <div className='w-full absolute content-none h-full purple_filter bottom-5 border-b border z-9'></div>
      <div className='w-full absolute content-none h-[1px] bottom-1 left-0 purple_bottom_border z-11'></div>
      <img 
        src="/images/LightStrike.png" 
        alt="Light Strike" 
        className='
          absolute
          bottom-1
          right-[50%]
          -translate-x-[50%]
          opacity-60
        '
      />
        <ul className='flex flex-row w-full items-center justify-between text-gray-400 font-bold z-10 relative'>
          <li className='hover:text-gray-300 transition duration-200'><a href="#">All</a></li>
          <li className='hover:text-gray-300 transition duration-200'><a href="#">Gaming</a></li>
          <li className='hover:text-gray-300 transition duration-200'><a href="#">Thoughts</a></li>
          <li className='hover:text-gray-300 transition duration-200'><a href="#">Music</a></li>
          <li className='hover:text-gray-300 transition duration-200'><a href="#">Thrillers</a></li>
          <li className='hover:text-gray-300 transition duration-200'><a href="#">Mixes</a></li>
          <li className='hover:text-gray-300 transition duration-200'><a href="#">Avatar</a></li>
          <li className='hover:text-gray-300 transition duration-200'><a href="#">Film criticisma</a></li>
          <li className='hover:text-gray-300 transition duration-200'><a href="#">Korean Dramas</a></li>
          <li className='hover:text-gray-300 transition duration-200'><a href="#">Characters</a></li>
          <li className='hover:text-gray-300 transition duration-200'><a href="#">Eating</a></li>
        </ul>
    </div>
  )
}

export default BottomNavigation