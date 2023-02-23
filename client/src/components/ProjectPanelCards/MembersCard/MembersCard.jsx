
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import "./MembersCard.css"
import TeamName from './TeamName/TeamName'
import UserCard from './UserCard/UserCard'

const MembersCard = ({ projectData, setProjectData, cardInfo, propertyName, editable=false }) => {

	const bgPrimary = { backgroundColor : cardInfo.color, color : "white"}
	const bgLight = { backgroundColor : `${cardInfo.color}23`}
	const bgMedium = { backgroundColor : `${cardInfo.color}59`}
	
	return (
		<div className="card info-card members-card">
			<div className="header" style={bgPrimary }>
                <FontAwesomeIcon icon={cardInfo.icon} className="icon"/>
                <div className="h4 fw-bold ms-3">{cardInfo.title}</div>
            </div>

			<TeamName 
				projectData={projectData}
				setProjectData={setProjectData}
				propertyName={"teamName"}
				style={ { backgroundColor : "white"}  }
			/>

			<div className="content">
				{
					projectData.teamMembers.map( (user) => (
						<UserCard user={user} style={bgLight}/>
					))
				}
			</div>
		</div>
	)
}

export default MembersCard