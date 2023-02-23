import React, { useState, useRef } from 'react'
import { Link, useLocation } from "react-router-dom"

import { Avatar, Button, IconButton, Box, TextField } from '@mui/material'
import { Edit, GitHub, LinkedIn } from '@mui/icons-material'

import socialMediaAccounts from '../../../data/socialMediaData'

import './SocialMedia.css'
import DomainSelector from '../../CustomSelector/DomainSelector'

const SocialMedia = () => {

    const currentPathname = useLocation().pathname;
    const [showPopup, setShowPopup] = useState(false);

    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };

    return (
        <>
            <div className="socialMedia">
                <div className="socialMediaHeading">
                    {
                        currentPathname === '/student/portfolio'
                        ? <h4 style = {{ color: '#142683', borderLeft: '4px solid #142683', paddingLeft: '1rem' }}>Social Media Accounts</h4> 
                        : <h4>Social Media Accounts</h4>
                    }
                    {
                        currentPathname === '/student/portfolio'
                        ? '' 
                        : <IconButton onClick = {() => setShowPopup(true)} ><Edit /></IconButton>
                    }
                </div>
                <div className="socialMediaAccounts">
                    {
                        socialMediaAccounts.map((socialMediaAccount, id) => {
                            return (
                                <Link to = {{ }} >
                                    <IconButton>
                                    {<socialMediaAccount.icon style = {{ color: socialMediaAccount.color }}  />}
                                    </IconButton>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            <div className={`modalDiv ${showPopup ? "show" : ""}`}>
                <div className={`modalComponent ${showPopup ? "show" : ""}`}>
                    <form action="">
                            <h3>Profile Details</h3>

                            <div className="profileInformation">
                                <div className="leftProfileInfo">
                                    <div className="formGroup full">
                                        <h5>Your Full Name</h5>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter your Full Name"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                    </div>

                                    <div className="formGroup full">
                                        <h5> Which domain are you interested in working? (add upto 3)*</h5>
                                        <DomainSelector />
                                    </div>

                                    <div className="formGroup half">
                                        <div className="left">
                                            <h5>University Name</h5>
                                            <TextField
                                                id="outlined-basic"
                                                label="Type College Name"
                                                variant="outlined"
                                                size="small"
                                                style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                            />
                                        </div>
                                        <div className="right">
                                            <h5>Location</h5>
                                            <TextField
                                                id="outlined-basic"
                                                label="Type Location"
                                                variant="outlined"
                                                size="small"
                                                style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="formGroup full">
                                        <h5>Social Media Accounts</h5>
                                        <div className="social-media-account">
                                            <Box style = {{ display: "flex", gap: "1rem", width: "100%" }}>
                                                <IconButton><LinkedIn style = {{ color: "blue", fontSize: "40px" }}/></IconButton>
                                                <TextField id="input-with-sx" label="LinkedIn Link" variant="standard" size = "small" style = {{ width: "100%" }}/>
                                            </Box>
                                            <Box style = {{ display: "flex", gap: "1rem", width: "100%" }}>
                                                <IconButton><GitHub style = {{ color: "var(--black)", fontSize: "40px" }}/></IconButton>
                                                <TextField id="input-with-sx" label="GitHub Link" variant="standard" size = "small" style = {{ width: "100%" }}/>
                                            </Box>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="rightProfileInfo">
                                    <div className="profileAvatar">
                                        { !image && <Avatar src = 'S' style = {{ width: "100px", height: "100px" }} /> }
                                        { image && <Avatar src = {image.image} style = {{ width: "100px", height: "100px" }} /> }
                                        <h4>Add a Nice Profile Picture</h4>
                                        <p style = {{ fontSize: "14px" }} >(Should be less than 2MB)</p>
                                        <Button  
                                            variant = "contained" 
                                            onClick={()=>imageRef.current.click()}
                                            style = {{ 
                                                textTransform: "capitalize", 
                                                fontFamily: "Poppins", 
                                                fontSize: "14px", 
                                                backgroundColor: '#142683' 
                                            }} >
                                            Upload Profile Photo
                                        </Button>
                                    </div>
                                    <div style={{ display: "none" }}>
                                        <input
                                        type="file"
                                        name="myImage"
                                        ref={imageRef}
                                        onChange={onImageChange}
                                        />
                                    </div>
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

export default SocialMedia