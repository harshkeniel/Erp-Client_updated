
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { IconButton, Button, TextField  } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/';
import { CardMembership, Add, Edit } from '@mui/icons-material'

import DomainSelector from '../../CustomSelector/DomainSelector'
import CertificationData from '../../../data/Certification'

const Certification = () => {

    const currentPathname = useLocation().pathname;
    const [showPopup, setShowPopup] = useState(false)

    const [value, setValue] = React.useState(new Date());


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
                                    <CardMembership style = {{ fontSize: '40px' }} />
                                </IconButton>
                            </div>
                            <div className="rightAddNewComponent">
                                <div className="left">
                                    <h5>Add Certificate / Course Details</h5>
                                    <p>All Certifications / Courses you have done</p>
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
                            ? <h4 style = {{ color: '#142683', borderLeft: '4px solid #142683', paddingLeft: '1rem' }}>Certifications</h4> 
                            : ''

                        }
                        {
                            CertificationData.map((certificate, id) => {
                                return (
                                    <div className="sectionInfo">
                                        <div className="left">
                                            <h4> { certificate.title } </h4>
                                            <Link 
                                                to = { certificate.certificateLink }
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                style = {{ color: "#445ee2", fontWeight: "600" }} >
                                                    Certificate Link
                                            </Link>
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
                        <div className="sectionInfoContainer">
                            {
                                CertificationData.map((certificate, id) => {
                                    return (
                                        <div className="sectionInfo">
                                            <div className="left">
                                                <h4> { certificate.title } </h4>
                                                <Link 
                                                    to = { certificate.certificateLink }
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    style = {{ color: "#445ee2", fontWeight: "600" }} >
                                                        Certificate Link
                                                </Link>
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
                                    <h3>Certification Detail</h3>

                                    <div className="formGroup full">
                                        <h5>Title</h5>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter name of certification"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                    </div>

                                    <div className="formGroup full">
                                        <DomainSelector title = {'Please Add Your Skills'}/>
                                    </div>

                                    <div className="formGroup full">
                                        <h5>Describe your Certification</h5>
                                        <TextField
                                            id="outlined-basic"
                                            label="What do you learn from this certification?"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="What do you learn from this certification?"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="What do you learn from this certification?"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                                        />
                                    </div>

                                    <div className="formGroup full">
                                        <h5>When you completed this certification / course?</h5>
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
        </>
    )
}

export default Certification;