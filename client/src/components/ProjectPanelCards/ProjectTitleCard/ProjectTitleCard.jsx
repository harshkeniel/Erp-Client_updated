import React from 'react'

import EditButton from '../EditButton/EditButton'
import ContentEditable from "react-contenteditable";


const ProjectTitleCard = ({projectData, setProjectData, editable=false}) => {
	const [tempData, setTempData] = React.useState(projectData)
	const [editMode, setEditMode] = React.useState(false);

	const handleChange = (e, key) => {
		setTempData( (prev) => ({...prev, [key] : e.target.value }))
	}

	const dummyRequest = () => {
		setProjectData( (prev) => ({...prev, ...tempData }))
		console.log("PATCH : ", tempData)
	}


	return (
		<div className="card p-3" style={ { minHeight : "150px" , backgroundColor : (editMode ? "#b2ffb2" : "white")} }>
			<div className="d-flex flex-row align-items-center">
				<div>
					<img src={projectData.icon} alt="" height="100px" />
				</div>

				<div className="ms-3 me-4">
					<ContentEditable 
						tagName="span"
						className="h2 fw-bold"
						html={editMode ? tempData.name : projectData.name}
						disabled={editMode ? false : true}
						onChange={(e) => handleChange(e, "name")}
					/>

					<ContentEditable 
						tagName="p"
						html={editMode ? tempData.tagline : projectData.tagline}
						disabled={editMode ? false : true}
						onChange={(e) => handleChange(e, "tagline")}
					/>
				</div>
			</div>
			<div className="top-right">
				{
				editable && <EditButton 
					active={editMode}
					toggleActive={() => setEditMode(prev => !prev)}
					onSubmit={dummyRequest}
					onDismiss={() => setTempData(projectData)}
				/>
				}
			</div>
			
			
			
		</div>
		
	)
}

export default ProjectTitleCard