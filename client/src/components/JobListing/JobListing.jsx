import React from 'react'
import { Link } from 'react-router-dom'

import { Avatar, Button } from '@mui/material'
import { Share, BookmarkOutlined } from '@mui/icons-material' 
 
import './JobListing.css'

const JobListing = ({data}) => {
    return (
        <div className="jobListing post" >
            
            <div className="jobInfo">
                <div className="jobInfoLogoName">
                    <Avatar src = {data.companyLogo} alt = "" />
                    <div className="jobInfoDetails">
                        <h2>{data.jobTitle}</h2>
                        <p>{data.companyName} | {data.companyLocation}</p>
                    </div>
                </div>
                <div className="jobInfoIcons">
                    <BookmarkOutlined style = {{ fontSize: "32px", color: "rgb(67, 138, 246)"}} />
                    <Share />
                </div>
            </div>

            <div className="discussionTags" style = {{ display: "flex", gap: "1rem" }}>
                {data.mandatorySkills.map((tag, id) => {
                    return (
                    <div
                        style={{
                        borderRadius: "10px",
                        padding: "6px",
                        backgroundColor: "var(--contentBody)",
                        minWidth: "100px",
                        textAlign: "center",
                        }}
                    >
                        <h5> {tag.skillName} </h5>
                    </div>
                    );
                })}
                </div>

            <div className="jobOtherInfo">
                <div className="jobOtherInfoItem">
                    <p>Stipend</p>
                    <h4>{data.stipend}</h4>
                </div>

                <div className="jobOtherInfoItem">
                    <p>Duration</p>
                    <h4>{data.duration} Months</h4>
                </div>

                <div className="jobOtherInfoItem">
                    <p>Mode</p>
                    <h4>{data.mode} hours / day</h4>
                </div>

                <div className="jobOtherInfoItem">
                    <p>Positions</p>
                    <h4>{data.Positions}</h4>
                </div>
            </div>

            <div className="jobInfoLastDate">
                <p>Apply Earliest by {data.endDateToApply}</p>
                <div className="jobInfoBtns">
                    <Link to = '/industry/listings/single-listing'>
                        <Button variant = "contained"
                            style = {{
                                fontFamily: 'Poppins',
                                fontSize: '14px',
                                textTransform: 'capitalize',
                                width: 'max-content'
                            }}
                        >View More</Button>
                    </Link>
                </div>
            </div>

            <div style = {{ borderRadius: '10px', padding: '0.5rem',  backgroundColor: 'lightgreen', color: 'var(--black)', position: "absolute", top: "-1rem", right: "5rem" }} >
                { data.isRemote && <h5>Remote</h5> }
                { !data.isRemote && <h5>In Office</h5> }
            </div>

        </div>
    )
}

export default JobListing