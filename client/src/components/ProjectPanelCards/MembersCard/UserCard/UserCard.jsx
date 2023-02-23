import React from 'react'

import "./UserCard.css"

const UserCard = ({user, style}) => {
    return (
        <div className="user-card" style={style}>
			<div>
				<img src={user.image} alt="" className="user-img"/>
			</div>
			<div className="user-name">
				<p>{user.firstname}</p>
				<p>{user.lastname}</p>
			</div>
		</div>
    )
}

export default UserCard