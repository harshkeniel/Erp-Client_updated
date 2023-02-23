import React, { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Avatar, Button, IconButton, Tab, Box, TextField } from '@mui/material'
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { Edit, FileDownload, Share, GitHub, LinkedIn } from '@mui/icons-material'

import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Position from '../Position/Position';
import Work from '../Work/Work';
import Achievement from '../Achievement/Achievement';
import Certification from '../Certification/Certification';

import SiddheshPic from '../../../assets/images/siddheshProfilePhoto.png'

import './ProfileInfo.css'
import DomainSelector from '../../CustomSelector/DomainSelector';

const ProfileInfo = () => {

    const currentPathname = useLocation().pathname;

    const [value, setValue] = React.useState("1");
    const [showPopup, setShowPopup] = useState(false)

    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
            {
                currentPathname === '/student/portfolio'
                ? (
                    <>
                        <div className="profileInfoHeading">
                            <div className="personalDetails">
                                <div className="avatar">
                                    <Avatar src = {SiddheshPic} alt = "Siddhesh Mane" sx={{ width: 60, height: 60 }} />
                                </div>
                                <div className="avatarInfo">
                                    <div className="avatarInfoDetails">
                                        <h3>Siddhesh Mane</h3>
                                        <h5>SDE Intern at Arachnomesh Technologies Pvt Ltd</h5>
                                        <p>Thakur College of Engineering - 2023 passout</p>
                                    </div>
                                    <div className="avatarInfoBtns" style = {{ width: '15%' }} >
                                        <IconButton>
                                            <Share style = {{ color: "#438af6" }} />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profileTabContainer"
                            style = {{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem',
                                padding: '0.5rem'
                            }}
                        >
                            <Work />
                            <Projects />
                            <Achievement />
                        </div>
                    </>
                )
                : (
                    <>
                        <div className="profileInfoHeading">
                            <div className="personalDetails">
                                <div className="avatar">
                                    <Avatar src = {SiddheshPic} alt = "Siddhesh Mane" sx={{ width: 60, height: 60 }} />
                                </div>
                                <div className="avatarInfo">
                                    <div className="avatarInfoDetails">
                                        <h3>Siddhesh Mane</h3>
                                        <h5>SDE Intern at Arachnomesh Technologies Pvt Ltd</h5>
                                        <p>Thakur College of Engineering - 2023 passout</p>
                                    </div>
                                    <div className="avatarInfoBtns">
                                        <IconButton>
                                            <Share style = {{ color: "#438af6" }} />
                                        </IconButton>
                                        <IconButton onClick = {() => setShowPopup(true)}>
                                            <Edit style = {{ color: "#438af6" }} />
                                        </IconButton>
                                        <Link to = '../student/portfolio' target = "_blank">
                                            <Button variant = "contained" 
                                                style = {{ 
                                                    textTransform: "capitalize", 
                                                    fontFamily: "Poppins", 
                                                    fontSize: "14px", 
                                                    backgroundColor: '#142683' 
                                                }} >
                                                Public Profile
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="profileTabContainer">
                                <TabContext value={value}>
                                
                                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                        <TabList onChange={handleChange} aria-label="">
                                            <Tab
                                                label="Education"
                                                value="1"
                                                style={{
                                                    textTransform: "capitalize",
                                                    color: "var(--black",
                                                    fontWeight: "bold",
                                                    fontSize: "13px",
                                                    fontFamily: "Poppins",
                                                    padding: "1rem !important"
                                                }}
                                            />
                                            <Tab
                                                label="Projects"
                                                value="2"
                                                style={{
                                                    textTransform: "capitalize",
                                                    color: "var(--black",
                                                    fontWeight: "bold",
                                                    fontSize: "13px",
                                                    fontFamily: "Poppins",
                                                    padding: "1rem"
                                                }}
                                            />
                                            <Tab
                                                label="Positions of Responsibility"
                                                value="3"
                                                style={{
                                                    textTransform: "capitalize",
                                                    color: "var(--black",
                                                    fontWeight: "bold",
                                                    fontSize: "13px",
                                                    fontFamily: "Poppins",
                                                    padding: "1rem"
                                                }}
                                            />
                                            <Tab
                                                label="Work Experience"
                                                value="4"
                                                style={{
                                                    textTransform: "capitalize",
                                                    color: "var(--black",
                                                    fontWeight: "bold",
                                                    fontSize: "13px",
                                                    fontFamily: "Poppins",
                                                    padding: "1rem"
                                                }}
                                            />
                                            <Tab
                                                label="Achievements"
                                                value="5"
                                                style={{
                                                    textTransform: "capitalize",
                                                    color: "var(--black",
                                                    fontWeight: "bold",
                                                    fontSize: "13px",
                                                    fontFamily: "Poppins",
                                                    padding: "1rem"
                                                }}
                                            />
                                            <Tab
                                                label="Certifications"
                                                value="6"
                                                style={{
                                                    textTransform: "capitalize",
                                                    color: "var(--black",
                                                    fontWeight: "bold",
                                                    fontSize: "13px",
                                                    fontFamily: "Poppins",
                                                    padding: "1rem"
                                                }}
                                            />
                                        </TabList>
                                    </Box>

                                    <TabPanel 
                                        value="1" 
                                        style = {{ 
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '2rem'
                                        }}
                                    >  
                                        <Education />
                                    </TabPanel>

                                    <TabPanel 
                                        value="2"
                                        style = {{ 
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '2rem'
                                        }}
                                    >     
                                        <Projects />
                                    </TabPanel>

                                    <TabPanel 
                                        value="3"
                                        style = {{ 
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '2rem'
                                        }}
                                    >     
                                        <Position />
                                    </TabPanel>

                                    <TabPanel 
                                        value="4"
                                        style = {{ 
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '2rem'
                                        }}
                                    >     
                                        <Work />
                                    </TabPanel>

                                    <TabPanel 
                                        value="5"
                                        style = {{ 
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '2rem'
                                        }}
                                    >     
                                        <Achievement />
                                    </TabPanel>

                                    <TabPanel 
                                        value="6"
                                        style = {{ 
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '2rem'
                                        }}
                                    >     
                                        <Certification />
                                    </TabPanel>

                                </TabContext>
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
        </>
    )
}

export default ProfileInfo