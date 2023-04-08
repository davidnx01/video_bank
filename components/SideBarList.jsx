import React from 'react'
import { sideBarContsMain } from "../constants/sideBarConts"


const SideBarList = () => {
  return (
    <div>
        {sideBarContsMain.map((item) => (
            <div>
                <p>{item.label}</p>
            </div>
        ))}
    </div>
  )
}

export default SideBarList