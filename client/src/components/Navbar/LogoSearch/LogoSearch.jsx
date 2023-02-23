import React from 'react'

// import Logo from '../../../assets/images/appLogoIcon.png'
import { UilSearch } from '@iconscout/react-unicons'

import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className = "logoSearch">
        {/* <a href="/">
          <img src = {Logo} alt = "" />
        </a> */}
        <div className = "search">
            <input type = "text" placeholder = 'Search...' />
            <div className = "searchIcon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch