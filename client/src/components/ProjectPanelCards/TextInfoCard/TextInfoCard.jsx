
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import EditButton from '../EditButton/EditButton'

import ContentEditable from "react-contenteditable";

import "./TextInfoCard.css"

const TextInfoCard = ({projectData, setProjectData, cardInfo, propertyName, editable=false}) => {
	const [tempData, setTempData] = React.useState(projectData[propertyName])
	const [editMode, setEditMode] = React.useState(false)

	const handleChange = (e) => {
		setTempData(e.target.value)
	}

	const dummyRequest = () => {
		setProjectData( (prev) => ({...prev, [propertyName] : tempData }))
		console.log("PATCH : ", {[propertyName] : tempData})
	}

	return (
		<div className="card h-100 info-card text-info-card" style={ { minHeight : "150px"} } >
			<div className="header" style={ {backgroundColor : cardInfo.color, color : "white"} }>
				<FontAwesomeIcon icon={cardInfo.icon} className="icon"/>
				<div className="h4 fw-bold ms-3">{cardInfo.title}</div>
				<div className="align-self-end">
					{
						editable && (
							<EditButton 
								active={editMode}
								toggleActive={() => setEditMode(prev => !prev)}
								onSubmit={dummyRequest}
								onDismiss={() => setTempData(projectData[propertyName])}
							
							/>
						)
					}
				</div>
			</div>
			<div className="content" style={ {backgroundColor : `white`} }>
				<ContentEditable
					tagName="p"
					html={editMode ? tempData : projectData[propertyName]}
					disabled={(editable && editMode) ? false : true}
					onChange={handleChange}
				/>
			</div>
		</div>
	)
}

export default TextInfoCard