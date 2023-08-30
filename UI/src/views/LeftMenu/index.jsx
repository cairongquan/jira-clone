import { useState } from 'react'

import MenuItem from "../../components/MenuItem"
import { menuConfig } from '@/assets/constant.js'
import { useNavigate } from 'react-router-dom'

import routerConfig from '../../router'

import './index.scss'

export default function LeftMenu() {
  const [activeMenu, setActiveMenu] = useState(0)
  const router = useNavigate()

  const changeActiveTabEvent = (index) => {
    setActiveMenu(index)
    router(routerConfig[index].path)
  }

  return (
    <div className='left-menu'>
      {menuConfig.map((item, index) => {
        return (
          <div className='mb-[4px]' key={index}>
            <MenuItem onClick={() => changeActiveTabEvent(index)} icon={item.menuIcon} text={item.menuName} color={activeMenu === index ? '#0052cc' : '#172b4d'} background={activeMenu === index}></MenuItem>
          </div>
        )
      })}
    </div >
  )
}
