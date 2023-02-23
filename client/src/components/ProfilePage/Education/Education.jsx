
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { IconButton, Button, TextField, InputLabel, MenuItem, FormControl, Select  } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/';
import { School, Add, Edit } from '@mui/icons-material'

import EducationData from '../../../data/EducationData'

import './Education.css'

const Education = () => {

    const currentPathname = useLocation().pathname;

    const [university, setUniversity] = React.useState('');
    
    const [showPopup, setShowPopup] = useState(false);
    const [value, setValue] = React.useState(new Date());

    const handleChange = (event) => {
        setUniversity(event.target.value);
    };

    return (
        <>
            {
                currentPathname === '/student/portfolio'
                ? '' 
                : (
                    <div className="addInfo">
                        <div className="addNewComponent">
                            <div className="leftAddNewComponent">
                                <IconButton>
                                    <School style = {{ fontSize: '40px' }} />
                                </IconButton>
                            </div>
                            <div className="rightAddNewComponent">
                                <div className="left">
                                    <h5>Add Education Details</h5>
                                    <p>Your College Details</p>
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
                )
            }
            
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
                            ? <h4 style = {{ color: '#142683', borderLeft: '4px solid #142683', paddingLeft: '1rem' }}>Education</h4> 
                            : ''

                        }
                        {
                            EducationData.map((education, id) => {
                                return (
                                    <div className="sectionInfo">
                                        <div className="left">
                                            <h4> { education.collegeName } </h4>
                                            <p> { education.degree } { education.studyField } | { education.grade } %</p>
                                            <p> { education.startYear } - { education.endYear } </p>
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
                    <div className="sectionInfoContainer">
                        {
                            EducationData.map((education, id) => {
                                return (
                                    <div className="sectionInfo">
                                        <div className="left">
                                            <h4> { education.collegeName } </h4>
                                            <p> { education.degree } { education.studyField } | { education.grade } %</p>
                                            <p> { education.startYear } - { education.endYear } </p>
                                        </div>
                                        <div className="right">
                                            {
                                                currentPathname === '/student/portfolio'
                                                ? '' 
                                                : <IconButton onClick = {() => setShowPopup(true)}><Edit /></IconButton>
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }      

            <div className={`modalDiv ${showPopup ? "show" : ""}`}>
                <div className={`modalComponent ${showPopup ? "show" : ""}`}>
                    <form action="">

                    <h3>Education Detail</h3>

                    <div className="formGroup half">
                        <div className="left">
                            <h5>University Name</h5>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small">Select your College</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={university}
                                    label="Select your College"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">Select</MenuItem>
                                    <MenuItem value={0}>B.E</MenuItem>
                                    <MenuItem value={1}>M.E</MenuItem>
                                    <MenuItem value={2}>B.Tech</MenuItem>
                                    <MenuItem value={3}>M.Tech</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="right">
                            <h5>Field of Study</h5>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small">Select your field</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={university}
                                    label="Select your Field"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">Select</MenuItem>
                                    <MenuItem value={0}>B.E</MenuItem>
                                    <MenuItem value={1}>M.E</MenuItem>
                                    <MenuItem value={2}>B.Tech</MenuItem>
                                    <MenuItem value={3}>M.Tech</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="formGroup half">
                        <div className="left">
                            <h5>Degree</h5>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small">Select your degree</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={university}
                                    label="Select your degree"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">Select</MenuItem>
                                    <MenuItem value={0}>B.E</MenuItem>
                                    <MenuItem value={1}>M.E</MenuItem>
                                    <MenuItem value={2}>B.Tech</MenuItem>
                                    <MenuItem value={3}>M.Tech</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="right">
                            <h5>Grade (in %)</h5>
                            <TextField
                                id="outlined-basic"
                                label="Enter Grade"
                                variant="outlined"
                                size="small"
                                type="number"
                                placeholder='Enter Grade (in %)'
                                style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                            />
                        </div>
                    </div>

                    <div className="formGroup half">
                        <div className="left">
                            <h5>Start Year</h5>
                            <DatePicker
                                views={['year']}
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
                                views={['year']}
                                label="Year only"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} helperText={null} />}
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

export default Education