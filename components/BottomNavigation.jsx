import React from 'react'

const BottomNavigation = () => {
  return (
    <div className='w-full px-1 py-4 relative'>
      <div className='w-full absolute content-none h-full purple_filter bottom-5 border-b border'></div>
        <ul className='flex flex-row w-full items-center justify-between text-gray-400 font-bold'>
          <li><a href="#">All</a></li>
          <li><a href="#">Gaming</a></li>
          <li><a href="#">Thoughts</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Thrillers</a></li>
          <li><a href="#">Mixes</a></li>
          <li><a href="#">Avatar</a></li>
          <li><a href="#">Film criticisma</a></li>
          <li><a href="#">Korean Dramas</a></li>
          <li><a href="#">Characters</a></li>
          <li><a href="#">Eating</a></li>
        </ul>
    </div>
  )
}

export default BottomNavigation