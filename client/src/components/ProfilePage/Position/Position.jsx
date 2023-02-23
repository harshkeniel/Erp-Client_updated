
import React, { useState }  from 'react'
import { Link } from 'react-router-dom'

import { IconButton, Button, TextField  } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/'
import { Person, Add, Edit } from '@mui/icons-material'

import DomainSelector from '../../CustomSelector/DomainSelector'
import POR from '../../../data/PORData'

const Position = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [value, setValue] = React.useState(new Date());

    return (
        <>
            <div className="addInfo">
                <div className="addNewComponent">
                    <div className="leftAddNewComponent">
                        <IconButton>
                            <Person style = {{ fontSize: '40px' }} />
                        </IconButton>
                    </div>
                    <div className="rightAddNewComponent">
                        <div className="left">
                            <h5>Add Position of Responsibility</h5>
                            <p>Add any PORs like college clubs, social service, community head, etc.</p>
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
                    POR.map((position, id) => {
                        return (
                            <div className="sectionInfo">
                                <div className="left">
                                    <span>
                                        <h4>
                                            { position.position } | <Link 
                                                to = { position.certificateLink }
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                style = {{ color: "#445ee2", fontWeight: "600" }} >
                                                    Certificate Link
                                            </Link>
                                        </h4>
                                    </span>
                                    <ul>
                                        {
                                            position.bulletPoints.map((bullet, id) => {
                                                return (
                                                    
                                                    <li> { bullet.description } </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="skillsContainer" style = {{ gridTemplateColumns: 'repeat(6, 1fr)' }} >
                                        {
                                            position.skills.map((skill, id) => {
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
                        <h3>Position of Responsibilty</h3>

                        <div className="formGroup full">
                            <h5>Title</h5>
                            <TextField
                                id="outlined-basic"
                                label="Enter Position of Responsibility"
                                variant="outlined"
                                size="small"
                                style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                            />
                        </div>

                        <div className="formGroup full">
                            <DomainSelector title = {'Please Add Your Skills'}/>
                        </div>


                        <div className="formGroup full">
                            <h5>Describe your Position of Responsibility</h5>
                            <TextField
                                id="outlined-basic"
                                label="What do you accomplish with this Position of Responsibility"
                                variant="outlined"
                                size="small"
                                style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="What do you accomplish with this Position of Responsibility"
                                variant="outlined"
                                size="small"
                                style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="What do you accomplish with this Position of Responsibility"
                                variant="outlined"
                                size="small"
                                style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                            />
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
                                    size="small"
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

                        <div className="formGroup full">
                            <h5>Certification Link</h5>
                            <TextField
                                id="outlined-basic"
                                label="Enter Certification Link"
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

export default Position;