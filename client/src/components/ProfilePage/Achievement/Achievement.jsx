
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { IconButton, Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/';
import { EmojiEvents, Add, Edit } from '@mui/icons-material'

import AchievementData from '../../../data/Achievement'

const Achievement = () => {

    const currentPathname = useLocation().pathname;
    const [showPopup, setShowPopup] = useState(false)

    const [value, setValue] = React.useState(new Date());

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
                            ? <h4 style = {{ color: '#142683', borderLeft: '4px solid #142683', paddingLeft: '1rem' }}>Achievements</h4> 
                            : ''

                        }

                        {
                            AchievementData.map((achievement, id) => {
                                return (
                                    <div className="sectionInfo" >
                                        <div className="left">
                                            <h5> { achievement.title } </h5>
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
                                        <EmojiEvents style = {{ fontSize: '40px' }} />
                                    </IconButton>
                                </div>
                                <div className="rightAddNewComponent">
                                    <div className="left">
                                        <h5>Add Achievements / Extracurricular Activity</h5>
                                        <p>Add your achievements of Hackathons, NGO services, Exam ranks, Clubs, etc.</p>
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
                                AchievementData.map((achievement, id) => {
                                    return (
                                        <div className="sectionInfo" >
                                            <div className="left">
                                                <h4> { achievement.title } </h4>
                                                <h5> Issued by { achievement.issuer } - { achievement.issueDate } </h5>
                                                <p style = {{ fontSize: "14px" }}> { achievement.description } </p>
                                            </div>
                                            <div className="right">
                                                <IconButton onClick = {() => setShowPopup(true)}>
                                                    <Edit style = {{ fontSize: '20px' }} />
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
                                    <h3>Achievement Detail</h3>

                                    <div className="formGroup full">
                                        <h5>Title</h5>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter Achievement Name"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                    </div>

                                    <div className="formGroup full">
                                        <h5>Issuer</h5>
                                        <TextField
                                            id="outlined-basic"
                                            label="Issuer"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                    </div>

                                    <div className="formGroup full">
                                        <h5>Issue Date</h5>
                                        <DatePicker 
                                            views={['month', 'year']}
                                            label="Issue Month and Year"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            size="small"
                                            renderInput={(params) => <TextField {...params} helperText={null} />}
                                            style = {{ width: "100%" }}
                                        />
                                    </div>

                                    <div className="formGroup full">
                                        <h5>Describe your Achievement</h5>
                                        <TextField
                                            id="outlined-basic"
                                            label="Describe abour your Achievement"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
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

export default Achievement;