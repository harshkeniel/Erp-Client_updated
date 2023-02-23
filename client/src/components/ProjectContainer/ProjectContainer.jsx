import React from 'react'

import ProjectData from '../../data/ProjectData'
import Project from './Project/Project'

import './ProjectContainer.css'

const ProjectContainer = () => {
    return (
        <div className="projectContainer">
            {
                ProjectData.map((project, id) => {
                    return (
                        <Project 
                            data = {project}
                            id = {id}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProjectContainer