import React from 'react'
import EditButton from '../../EditButton/EditButton'

import ContentEditable from "react-contenteditable";

const TeamName = ({projectData, setProjectData, propertyName, style}) => {
    const [editMode, setEditMode] = React.useState(false)
    const [tempData, setTempData] = React.useState(projectData[propertyName])

    const dummyRequest = () => {
        if( tempData === "")
            return
            
        setProjectData( (prev) => {
            return ({
                ...prev,
                [propertyName] : tempData
            })
        })

        console.log("PATCH : ",{ [propertyName] : tempData } )
    }

    const handleChange = (e) => {
        setTempData( e.target.value )
    }

    return (
        <div className="team-name" style={ style }>
            Team
            <br />

            <ContentEditable 
                tagName="span"
                html={editMode ? tempData : projectData[propertyName]}
                disabled={editMode ? false : true}
                onChange={handleChange}
            />

            <EditButton
                active={editMode}
                toggleActive={() => setEditMode(prev => !prev)}
                onSubmit={dummyRequest}
                onDismiss={() => setTempData(projectData[propertyName])}
            />
            
        </div>
    )
}

export default TeamName