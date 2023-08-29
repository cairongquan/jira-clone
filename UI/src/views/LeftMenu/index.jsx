import { useState } from 'react'

import MenuItem from "../../components/MenuItem"
import { menuConfig } from '@/assets/constant.js'

import './index.scss'

export default function LeftMenu() {
  const [activeMenu, setActiveMenu] = useState(0)
  return (
    <div className='left-menu'>
      {menuConfig.map((item, index) => {
        return (
          <div className='mb-[4px]'>
            <MenuItem onClick={() => setActiveMenu(index)} icon={item.menuIcon} text={item.menuName} color={activeMenu === index ? '#0052cc' : '#172b4d'} key={index} background={activeMenu === index}></MenuItem>
          </div>
        )
      })}
    </div >
  )
} 
