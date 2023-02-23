import React, { useState }  from 'react'
import { Link, useLocation } from 'react-router-dom'

import workData from '../../../data/workData'

import { IconButton, Button, TextField, InputLabel, MenuItem, FormControl, Select, Checkbox, FormControlLabel } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/';
import { Add, Edit } from '@mui/icons-material'

import WorkIcon from '@mui/icons-material/Work'
import DomainSelector from '../../CustomSelector/DomainSelector';

const Work = () => {
    
    const currentPathname = useLocation().pathname;
    const [showPopup, setShowPopup] = useState(false)

    const [value, setValue] = useState(new Date())

    const handleChange = (event) => {
        setValue(event.target.value);
    }

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
                            ? <h4 style = {{ color: '#142683', borderLeft: '4px solid #142683', paddingLeft: '1rem' }}>Work</h4> 
                            : ''

                        }

                        {
                            workData.map((work, id) => {
                                return (
                                    <div className="sectionInfo">
                                        <div className="left" style = {{ gap: '1rem'  }} >
                                            <div className="workInfo" style = {{ display: 'flex', gap: '0.25rem', flexDirection: 'column' }}>
                                                <h4> { work.designation } @ { work.companyName } , { work.location } </h4>
                                                <p style = {{ color: 'var(--gray)', fontSize: '14px' }} > { work.startDate } - { work.endDate } (5 months) | { work.workType } </p>
                                            </div>
                                            <ul>
                                                {
                                                    work.bulletPoints.map((bullet, id) => {
                                                        return (
                                                            <li> { bullet.description } </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <Link 
                                                to = { work.certificateLink }
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                style = {{ color: "#445ee2", fontWeight: "600" }} >
                                                    Project Link
                                            </Link>
                                            <div className="skillsContainer" style = {{ gridTemplateColumns: 'repeat(6, 1fr)' }} >
                                                {
                                                    work.skills.map((skill, id) => {
                                                        return (
                                                            <div style = {{ background: skill.color }} >
                                                                <h5>{skill.name}</h5>
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
                                        <WorkIcon style = {{ fontSize: '40px' }} />
                                    </IconButton>
                                </div>
                                <div className="rightAddNewComponent">
                                    <div className="left">
                                        <h5>Add Work Experience</h5>
                                        <p>Your previous internship / full time experiences</p>
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
                                workData.map((work, id) => {
                                    return (
                                        <div className="sectionInfo">
                                            <div className="left" style = {{ gap: '1rem'  }} >
                                                <div className="workInfo" style = {{ display: 'flex', gap: '0.25rem', flexDirection: 'column' }}>
                                                    <h4> { work.designation } @ { work.companyName } , { work.location } </h4>
                                                    <p style = {{ color: 'var(--gray)', fontSize: '14px' }} > { work.startDate } - { work.endDate } (5 months) | { work.workType } </p>
                                                </div>
                                                <ul>
                                                    {
                                                        work.bulletPoints.map((bullet, id) => {
                                                            return (
                                                                <li> { bullet.description } </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <Link 
                                                    to = { work.certificateLink }
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    style = {{ color: "#445ee2", fontWeight: "600" }} >
                                                        Project Link
                                                </Link>
                                                <div className="skillsContainer" style = {{ gridTemplateColumns: 'repeat(6, 1fr)' }} >
                                                    {
                                                        work.skills.map((skill, id) => {
                                                            return (
                                                                <div style = {{ background: skill.color }} >
                                                                    <h5>{skill.name}</h5>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="right" onClick = {() => setShowPopup(true)}>
                                                <IconButton>
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
                                    <h3>Work Experience</h3>

                                    <div className="formGroup half">
                                        <div className="left">
                                            <h5>Company Name</h5>
                                            <TextField
                                                id="outlined-basic"
                                                label="Type Company Name"
                                                variant="outlined"
                                                size="small"
                                                style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                            />
                                        </div>
                                        <div className="right">
                                            <h5>Internship Type</h5>
                                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                                <InputLabel id="demo-select-small">Select your field</InputLabel>
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    value={value}
                                                    label="Select your Field"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value="">Select</MenuItem>
                                                    <MenuItem value={0}>Part Time (3-4 hours)</MenuItem>
                                                    <MenuItem value={1}>Semi Time (5-6 hours)</MenuItem>
                                                    <MenuItem value={2}>Full Time (7-8 hours)</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>

                                    <div className="formGroup full">
                                        <h5>Company Website / LinkedIn</h5>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter Company Link"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                    </div>

                                    <div className="formGroup half">
                                        <div className="left">
                                            <h5>Internship Title</h5>
                                            <TextField
                                                id="outlined-basic"
                                                label="Enter Internship Title"
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

                                    <div className="formGroup half" style = {{ alignItems: "flex-start" }} >
                                        <div className="left">
                                            <h5>Start Year</h5>
                                            <DatePicker 
                                                label="Year only"
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} helperText={null} />}
                                            />
                                        </div>
                                        <div className="right">
                                            <h5>End Year</h5>
                                            <DatePicker
                                                label="Year only"
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                defaultValue="dd-mm-yyyy"
                                                renderInput={(params) => <TextField {...params} helperText={null} />}
                                            />
                                            <FormControlLabel control={<Checkbox/>} label="Currently Working here" />
                                        </div>
                                    </div>

                                    <div className="formGroup full">
                                        <h5>Describe your Work Experience</h5>
                                        <TextField
                                            id="outlined-basic"
                                            label="What was the project assigned? "
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="What was your contribution to the project?"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="What are the some important features of the project?"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                    </div>

                                    <div className="formGroup half">
                                        <div className="left">
                                            <h5>Skills Used</h5>
                                            <DomainSelector />
                                        </div>
                                        <div className="right">
                                            <h5>Certificate Link</h5>
                                            <TextField
                                                id="outlined-basic"
                                                label="Certificate / LOR Link"
                                                variant="outlined"
                                                size="small"
                                                style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                            />
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

export default Work;