import React from 'react'

import Navbar from '../../../components/Navbar/Navbar'
import tabsInfo from '../../../data/CollegeAdminTabsInfo'

import './CollegeAdmin.css'

const CollegeAdmin = ({ Tab }) => {
    return (
        <div className="collegeAdmin">
            <Navbar tabsInfo = {tabsInfo} />
            <Tab />
        </div>
    )
}

export default CollegeAdmin