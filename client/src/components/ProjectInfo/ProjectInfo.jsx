import React from 'react'
import { Link } from 'react-router-dom'


import { Button } from '@mui/material';
import { InfoOutlined, PeopleAltOutlined, SendToMobile, FolderCopyOutlined, Layers } from '@mui/icons-material'

import { GoMarkGithub } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";

import ProjectData from '../../data/ProjectData'

import SiddheshPic from '../../assets/images/sagarProfilePhoto.jpeg'
import NinadPic from '../../assets/images/aynaanProfilePhoto.jpeg'
import RahulPic from '../../assets/images/rahulProfilePhoto.jpg'
import VishalPic from '../../assets/images/vishalProfilePhoto.jpg'

import './ProjectInfo.css'

const ProjectInfo = () => {
  return (
    <>
        <div className = "projectInfo">
        
            <div className = "projectHeading">
                <h3>Project Info</h3>
                <InfoOutlined />
            </div>

            <div className = "hl"></div>

            <div className = "creators">
                <div className = "creatorInfo">
                    <h4>Creators</h4>
                    <PeopleAltOutlined />
                </div>
                <div className = "avatarContainer">
                    <div className = "personalDetail">
                        <img className = "avatarIcon" src = { SiddheshPic } alt = "" />
                        <h5>Sagar Pachare</h5>
                    </div>
                    
                    <div className = "personalDetail">
                        <img className = "avatarIcon" src = { NinadPic } alt = "" />
                        <h5>Aynaan Quraishi</h5>
                    </div>
                    
                    <div className = "personalDetail">
                        <img className = "avatarIcon" src = { RahulPic } alt = "" />
                        <h5>Rahul Prajapati</h5>
                    </div>
                    <div className = "personalDetail">
                        <img className = "avatarIcon" src = { VishalPic } alt = "" />
                        <h5>Vishal Pandey</h5>
                    </div>
                </div>
            </div>

            <div className = "hl"></div>

            <Button variant = "contained" style = {{ textTransform: "capitalize", gap: "1rem" }}>
                <h4>Explore Project</h4> 
                <SendToMobile />
            </Button>

            <div className = "hl"></div>

            <div className = "resources">
                <div className = "resourceInfo">
                    <h4>Resources</h4>
                    <FolderCopyOutlined />
                </div>
                <div className = "resourceContainer">
                    <div className = "resource">
                        <GoMarkGithub />
                        <Link to = {{}} >Github</Link>
                    </div>
                    <div className = "resource">
                        <FaYoutube style = {{ color: "red" }} />
                        <Link to = {{}} >YouTube</Link>
                    </div>
                </div>
            </div>

            <div className = "hl"></div>

            <div className = "techStack">
                <div className = "techStackInfo">
                    <h4>Tech Stack</h4>
                    <Layers />
                </div>
                <div className = "techs">
                    <div style = {{ borderRadius: '10px', padding: '6px',  backgroundColor: 'lightcoral' }} >
                        <h5>HTML</h5>
                    </div>
                    <div style = {{ borderRadius: '10px', padding: '6px',  backgroundColor: 'pink' }} >
                        <h5>React JS</h5>
                    </div>
                    <div style = {{ borderRadius: '10px', padding: '6px',  backgroundColor: 'lightblue' }} >
                        <h5>Node JS</h5>
                    </div>
                    <div style = {{ borderRadius: '10px', padding: '6px',  backgroundColor: 'lightgreen' }} >
                        <h5>CSS</h5>
                    </div>
                </div>
            </div>

        </div>

        <div className="similarProjects projectInfo">
            <h3>Similar Projects</h3>
            <div className="hl"></div>

            <div 
                className="projectContainer" 
                style = {{ 
                    gridTemplateColumns: 'repeat(1, 1fr)', 
                    padding: '1rem', 
                    backgroundColor: "rgb(0 0 0 / 7%)" 
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
                                    <p style = {{ fontSize: "12px", fontFamily: "courier" }}>{ project.description }</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default ProjectInfo