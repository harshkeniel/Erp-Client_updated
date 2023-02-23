import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'

import CollegeBanner from '../../../../components/CollegeBanner/CollegeBanner'
import PostContainer from '../../../../components/PostContainer/PostContainer'
import TagFilter from '../../../../components/TagFilter/TagFilter'
import feedData from '../../../../data/feedData'
import ProjectData from '../../../../data/ProjectData'

import './AdminHomeContent.css'

const AdminHomeContent = () => {

    const [ selectedOption, setSelectedOption ] = React.useState({type : "feed", ...feedData[0]})

    return (
        <div className="adminHomeContent homeContent" style = {{ display: "flex" }} >

            <div className="leftAdmin">
                
                <div className="above" style = {{ position: "relative" }} >
                    <CollegeBanner editable={true}/>
                </div>
                
                <div className="below">
                    <div className="left">
                        <TagFilter style = {{ marginTop: "1rem" }} />
                    </div>
                    <div className="right">
                        <PostContainer 
                            selectedOption={selectedOption}
                        />
                    </div>
                </div>
            </div>

            <div className="rightAdmin">
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
            </div>
        </div>
    )
}

export default AdminHomeContent