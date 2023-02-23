import React from 'react'

import LogoSearch from './LogoSearch/LogoSearch'
import MenuTab from './MenuTab/MenuTab'
import NotiAvatar from './NotiAvatar/NotiAvatar'

import './Navbar.css'

const Navbar = ({tabsInfo}) => {
  return (
    <div className = "Navbar">
        <MenuTab tabsInfo = {tabsInfo}/>
        <LogoSearch />
        <NotiAvatar />
    </div>
  )
}

export default Navbar

// const Navbar = ({tabsInfo}) => {
//   return (
//     <div className = "Navbar">
//         <LogoSearch />
//         <MenuTab tabsInfo = {tabsInfo}/>
//         <NotiAvatar />
//     </div>
//   )
// }