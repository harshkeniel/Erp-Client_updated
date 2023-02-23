import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import tabsInfo from '../../data/IndustryTabsInfo'

const Industry = ({Tab}) => {
    return (
        <div className="Industry">
            <Navbar tabsInfo = {tabsInfo}/>
            <Tab />
        </div>
    )
}

export default Industry