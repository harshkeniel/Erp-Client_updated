import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'

import ProfileCard from '../../ProfileCard/ProfileCard'
import UpdateCard from '../../UpdatesCard/UpdateCard'

import ProjectData from '../../../data/ProjectData'

import './RightHomeContent.css'

const RightHomeContent = ({selectedOption}) => {
  return (
    <div className = "rightHomeContent">

        {
            selectedOption && selectedOption.name !== 'My College' &&
            <>
                <ProfileCard />
                <UpdateCard />
            </>
        }

        {
            selectedOption && (selectedOption.name === 'My College') &&
          
            <div className="similarProjects projectInfo">
                <div className="pinnedTitle" style = {{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>Pinned Projects</h3>
                    <FontAwesomeIcon icon={faThumbTack} />
                </div>

                <div className="hl"></div>

                <div 
                    className="projectContainer" 
                    style = {{ 
                        gridTemplateColumns: 'repeat(1, 1fr)', 
                        padding: '1rem', 
                        backgroundColor: "var(--contentBody" 
                    }}>

                    {
                        ProjectData.map((project, id) => {
                            return (
                                <div 
                                    className="projectCard" 
                                    style = {{ 
                                        maxHeight: '400px',  
                                        padding: '1rem'  
                                    }} 
                                >
                                    <div className="coverImg">
                                        <img src = {project.projectImg} alt = {{}} />
                                    </div>
                                    <div 
                                        className="description" 
                                        style = {{ 
                                            display: "flex", 
                                            flexDirection: "column", 
                                            gap: "0.5rem", 
                                            maxHeight: '75px', 
                                            overflow: "hidden" 
                                        }}>
                                        <h5> { project.title } </h5>
                                        <div className="hl"></div>
                                        <p style = {{ fontSize: "12px" }}>{ project.description }</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        }

    </div>
  )
}

export default RightHomeContent