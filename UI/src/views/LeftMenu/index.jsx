import { useState } from 'react'

import MenuItem from "../../components/MenuItem"
import { menuConfig } from '@/assets/constant.js'

export default function LeftMenu() {
  const [activeMenu, setActiveMenu] = useState(0)

  return (<>
    {menuConfig.map((item, index) => {
      return <MenuItem icon={item.menuIcon} text={item.menuName} color={activeMenu === index ? '#0052cc' : '#172b4d'} key={index} background={activeMenu === index}></MenuItem>
    })}
  </>)
}
