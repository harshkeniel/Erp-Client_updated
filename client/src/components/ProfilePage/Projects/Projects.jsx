
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import ProjectData from '../../../data/ProjectData'

import { IconButton, Button, TextField, Box  } from '@mui/material'
import { Assignment, Add, Edit } from '@mui/icons-material'

import DomainSelector from '../../CustomSelector/DomainSelector'

import { YouTube, GitHub } from '@mui/icons-material'

const Projects = () => {

    const currentPathname = useLocation().pathname;
    const [showPopup, setShowPopup] = useState(false)
   
    return (
        <>
            {
                currentPathname === '/student/portfolio'
                ? (
                    <div className="sectionInfoContainer"
                        style = {{ 
                            background: 'var(--cardColor)', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            padding: '1rem', 
                            gap: '1rem', 
                            borderRadius: '15px'
                        }} 
                    >
                        {
                            currentPathname === '/student/portfolio' 
                            ? <h4 style = {{ color: '#142683', borderLeft: '4px solid #142683', paddingLeft: '1rem' }}>Projects</h4> 
                            : ''

                        }

                        {
                            ProjectData.map((project, id) => {
                                return (
                                    <div className="sectionInfo">
                                        <div className="left" style = {{ gap: '1rem'  }} >
                                            <h4> { project.title } </h4>
                                            <ul>
                                                {
                                                    project.bulletPoints.map((bullet, id) => {
                                                        return (
                                                            <li> { bullet.description } </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <Link 
                                                to = { project.link } 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                style = {{ color: "#445ee2", fontWeight: "600" }} >
                                                    Project Link
                                            </Link>
                                            <div className="skillsContainer" style = {{ gridTemplateColumns: 'repeat(6, 1fr)' }} >
                                                {
                                                    project.skills.map((skill, id) => {
                                                        return (
                                                            <div style = {{ background: skill.color }} >
                                                                <h5> { skill.name } </h5>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="right">
                                            {
                                                currentPathname === '/student/portfolio'
                                                ? '' 
                                                : <IconButton><Edit /></IconButton>
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) 
                : (
                    <>
                        <div className="addInfo">
                            <div className="addNewComponent">
                                <div className="leftAddNewComponent">
                                    <IconButton>
                                        <Assignment style = {{ fontSize: '40px' }} />
                                    </IconButton>
                                </div>
                                <div className="rightAddNewComponent">
                                    <div className="left">
                                        <h5>Add Project Details</h5>
                                        <p>Projects that you have worked on before</p>
                                    </div>
                                    <div className="right">
                                        <Button 
                                            variant = "contained" 
                                            style = {{ 
                                                fontFamily: 'Poppins', 
                                                textTransform: 'capitalize', 
                                                gap: '1rem', 
                                                backgroundColor: '#142683'  
                                            }}
                                            onClick = {() => setShowPopup(true)} 
                                        >
                                            <Add /> Add New
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sectionInfoContainer">
                            {
                                ProjectData.map((project, id) => {
                                    return (
                                        <div className="sectionInfo">
                                            <div className="left" style = {{ gap: '1rem'  }} >
                                                <h4> { project.title } </h4>
                                                <ul>
                                                    {
                                                        project.bulletPoints.map((bullet, id) => {
                                                            return (
                                                                <li> { bullet.description } </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <Link 
                                                    to = { project.link } 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    style = {{ color: "#445ee2", fontWeight: "600" }} >
                                                        Project Link
                                                </Link>
                                                <div className="skillsContainer" style = {{ gridTemplateColumns: 'repeat(6, 1fr)' }} >
                                                    {
                                                        project.skills.map((skill, id) => {
                                                            return (
                                                                <div style = {{ background: skill.color }} >
                                                                    <h5> { skill.name } </h5>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="right">
                                                <IconButton onClick = {() => setShowPopup(true)}>
                                                    <Edit style = {{ fontSize: '30px' }} />
                                                </IconButton>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className={`modalDiv ${showPopup ? "show" : ""}`}>
                            <div className={`modalComponent ${showPopup ? "show" : ""}`}>
                            <form action="">
                                    <h3>Project Detail</h3>

                                    <div className="formGroup full">
                                        <h5>Title</h5>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter Project Name"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                    </div>

                                    <div className="formGroup full">
                                        <DomainSelector title = {'Please Add Your Skills (Max Limit: 3)'}/>
                                    </div>

                                    <div className="formGroup full">
                                        <h5>Describe your Project</h5>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter the goal of your project"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter the process of your project"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter the features of your project"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                    </div>

                                    <div className="formGroup half">
                                        <div className="left">
                                            <h5>Youtube Link</h5>
                                            <Box  style = {{ display: "flex", gap: "1rem", width: "100%" }}>
                                                <IconButton><YouTube style = {{ color: "red", fontSize: "40px" }}/></IconButton>
                                                <TextField id="input-with-sx" label="Youtube Link" variant="standard" size = "small" style = {{ width: "100%" }}/>
                                            </Box>
                                        </div>
                                        <div className="right">
                                            <h5>GitHub Link</h5>
                                            <Box  style = {{ display: "flex", gap: "1rem", width: "100%" }}>
                                                <IconButton><GitHub style = {{ color: "var(--black)", fontSize: "40px" }}/></IconButton>
                                                <TextField id="input-with-sx" label="GitHub Link" variant="standard" size = "small" style = {{ width: "100%" }}/>
                                            </Box>
                                        </div>
                                    </div>

                                    <div className="formGroup formBtns">
                                        <Button 
                                            variant = "outlined" 
                                            color = "error" 
                                            onClick = {() => setShowPopup(false)}
                                            style={{ textTransform: "capitalize", gap: "1rem" }}
                                        >
                                            Close
                                        </Button>
                                        <Button 
                                            variant = "contained" 
                                            onClick = {() => setShowPopup(false)}
                                            style={{ textTransform: "capitalize", gap: "1rem", backgroundColor: 'rgb(20, 38, 131)' }} 
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div> 
                    </>
                )
            }     
        </>
    )
}

export default Projects;