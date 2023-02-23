import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Sidebar.css"
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = ({items, headerIcon, header, activeItem, setActiveItem}) => {

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <FontAwesomeIcon icon={headerIcon}/>
                {header}
            </div>

            <div className="sidebar-menu">
                {
                    items.map( (item, index) => {
                        return (
                            <SidebarItem 
                                item={item}
                                key={index}
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Sidebar