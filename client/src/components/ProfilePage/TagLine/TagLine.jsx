import React, { useState} from 'react'
import { useLocation } from 'react-router-dom'

import { IconButton, TextField, Button } from '@mui/material'
import { Edit } from '@mui/icons-material'

import DomainSelector from '../../CustomSelector/DomainSelector'

import './TagLine.css'


const TagLine = () => {

    const currentPathname = useLocation().pathname;
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className="tagLine">
                <div className="tagLineHeading">
                    {
                        currentPathname === '/student/portfolio'
                        ? <h4 style = {{ color: '#142683', borderLeft: '4px solid #142683', paddingLeft: '1rem' }}>TagLine</h4> 
                        : <h4>TagLine</h4>
                    }
                    {
                        currentPathname === '/student/portfolio'
                        ? '' 
                        : <IconButton onClick = {() => setShowPopup(true)} ><Edit /></IconButton>
                    }
                </div>
                <div className="tagLineDescription">
                    <p>
                        A Passionate and Enthusiastic Individual seeking to explore new areas and work in a dynamic stable organization where I can improve my skills and knowledge in the field of Computer Engineering allowing myself to pursue a rewarding career ahead
                    </p>
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

export default TagLine