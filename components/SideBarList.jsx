import React from 'react'
import { sideBarContsChannel, sideBarContsMain, sideBarContsSubs } from "../constants/sideBarConts"



const SideBarList = () => {
  return (
    <>
      <ul>
        {sideBarContsMain.map((item) => (
          <SideBarItem key={item.icon} {...item} />
        ))}
      </ul>
      
      <h3 className='text-gray-400 text-sm my-6 font-bold'>MY CHANNEL</h3>

      <ul>
        {sideBarContsChannel.map((item) => (
          <SideBarItem key={item.icon} {...item} />
        ))}
      </ul>

      <h3 className='text-gray-400 text-sm my-6 font-bold'>SUBSCRIPTIONS</h3>

      <ul>
        {sideBarContsSubs.map((item) => (
          <SideBarItem key={item.logo} {...item} />
        ))}
      </ul>
    </>
  )
}

export default SideBarList;


const SideBarItem = ({ icon, label, logo }) => {
  return (
    <>
      <li>
        <a href="#">
          <div className='py-2 flex flex-row items-center justify-start gap-4 my-2 hover:text-gray-300 text-gray-400 transition duration-200'>
            {icon}
            <img src={logo} />
            <p>{label}</p>
          </div>
        </a>
      </li>
      <div className='side_bar_line'></div>
    </>


  )
}