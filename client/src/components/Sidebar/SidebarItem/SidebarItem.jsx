import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./SidebarItem.css"

const SidebarItem = ({ item, activeItem, setActiveItem }) => {
    return (
        <div 
            className={`sidebar-item ${activeItem.name === item.name ? "active" : ""}`}
            onClick={() => setActiveItem(item)}
        >
			<FontAwesomeIcon icon={item.icon} />
			{item.name}
		</div>
    )
}

export default SidebarItem