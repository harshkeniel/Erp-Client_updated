import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import SkillsData from '../../../data/SkillsData'

import { IconButton, Button, TextField } from '@mui/material'
import { Edit } from '@mui/icons-material'

import DomainSelector from '../../CustomSelector/DomainSelector'

import './Skills.css'

const Skills = () => {
    
    const currentPathname = useLocation().pathname;
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className="skills tagLine">
                <div className="tagLineHeading">
                    {
                        currentPathname === '/student/portfolio'
                        ? <h4 style = {{ color: '#142683', borderLeft: '4px solid #142683', paddingLeft: '1rem' }}>Skills</h4> 
                        : <h4>Skills</h4>
                    }
                    {
                        currentPathname === '/student/portfolio'
                        ? '' 
                        : <IconButton onClick = {() => setShowPopup(true)} ><Edit /></IconButton>
                    }
                </div>
                <div className="skillsContainer">
                    {
                        SkillsData.map((skill, id) => {
                            return (
                                <div style = {{ background: skill.color }} >
                                    <h5>{skill.name}</h5>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className={`modalDiv ${showPopup ? "show" : ""}`}>
                <div className={`modalComponent ${showPopup ? "show" : ""}`}>
                    <form action="">

                        <h3>Edit Profile</h3>
                        
                        <div className="formGroup full">
                            <h5>Add your Tagline for companies to know you better</h5>
                            <TextField
                                id="outlined-basic"
                                label="Tagline"
                                variant="outlined"
                                size="small"
                                style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                            />
                        </div>

                        <div className="formGroup full">
                            <DomainSelector title = {'Please Add Your Skills (Max Limit: 10)'}/>
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
                                color = "success" 
                                onClick = {() => setShowPopup(false)}
                                style={{ textTransform: "capitalize", gap: "1rem", backgroundColor: 'rgb(20, 38, 131)'}} 
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

export default Skills