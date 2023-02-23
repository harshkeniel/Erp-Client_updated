import React from "react";

import Logo from '../../../assets/images/appLogoIcon.png'
// import { UilSearch } from '@iconscout/react-unicons'

// import '../LogoSearch/LogoSearch.css'

import {
  Link, useLocation
} from "react-router-dom";

import './MenuTab.css'

const MenuTab = ({tabsInfo}) => {
  const currentPathname = useLocation().pathname

  const MenuTabOption = ({ tab }) => {
    // console.log(currentPathname)
    return (
      <Link to = {tab.link}>
        <div className = { currentPathname === tab.link ? "navMenuItem isActive" : "navMenuItem"}>
          <div className = "icon">
            <tab.icon style = {{ color: "#111" }} />
          </div>
          <h5>{tab.name}</h5>
        </div>
      </Link>
    )
  }
  
  return (
    // <div className = "logoSearch">
    //     <a href="/">
    //       <img src = {Logo} alt = "" />
    //     </a>
      <div className = "menuTab">
        <div className = "navMenu">
          <div className = "logoSearch">
            <a href="/">
              <img src = {Logo} alt = "" />
            </a>
          { tabsInfo.map((tab, index) => <MenuTabOption tab={tab} key={index} />) }
          </div>
        </div>
      </div>
  );
};

export default MenuTab;