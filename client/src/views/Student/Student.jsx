import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import tabsInfo from '../../data/StudentTabsInfo'


import './Student.css'

const Student = ({ Tab }) => {
    return (
        <div className="student">
            <Navbar tabsInfo = {tabsInfo}/>
            <Tab />
        </div>
    )
}

export default Student