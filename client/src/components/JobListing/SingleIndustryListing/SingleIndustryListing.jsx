import React from 'react'

import { Avatar } from '@mui/material'
import { Share, BookmarkOutlined } from '@mui/icons-material' 
import { Markup } from 'interweave';

import companyLogo from '../../../assets/images/companyLogo.jpg'
// import data from '../../../data/SingleDiscussionData'

const SingleIndustryListing = () => {

    const data = `About Internship Responsibilities Interns would be involved in developing responsive and dynamic web apps using frontend technologies. Skills Excellent verbal and written communication. knowledge of JavaScript and React concepts, excellent front-end coding skills, and a good understanding of progressive web applications. Should be able to design and build modern user interface components to enhance application performance.`
    
    return (

        <div className="SingleIndustryListing post" style = {{ width: "70%", margin: "2rem auto", backgroundColor: "var(--contentBody)" }}>
        
            <div className="jobInfo" style = {{ backgroundColor: "var(--cardColor)", padding: "1rem" }}>
                <div className="jobInfoLogoName">
                    <Avatar src = {companyLogo} alt = "" />
                    <div className="jobInfoDetails">
                        <h2>Front End Web Developer</h2>
                        <p>Arachnomesh Technologies | Noida, India</p>
                    </div>
                </div>
                <div className="jobInfoIcons">
                    <BookmarkOutlined style = {{ fontSize: "32px", color: "rgb(67, 138, 246)"}} />
                    <Share />
                </div>
            </div>

            <div className="jobOtherInfo" style = {{ backgroundColor: "var(--cardColor)", padding: "1rem" }}>
                <div className="jobOtherInfoItem">
                    <p>Stipend</p>
                    <h4>20000</h4>
                </div>

                <div className="jobOtherInfoItem">
                    <p>Duration</p>
                    <h4>6 Months</h4>
                </div>

                <div className="jobOtherInfoItem">
                    <p>Mode</p>
                    <h4>Semi Time</h4>
                </div>

                <div className="jobOtherInfoItem">
                    <p>Positions</p>
                    <h4>6</h4>
                </div>
            </div>

            <div className="profileSection" style = {{ width: "100%", gap: "1rem", padding: "0rem"}}>
                <div className="leftProfile" style = {{backgroundColor: "var(--cardColor)" }}>
                    <h3>About the Internship</h3>
                    <div className="keyResponsibility" style = {{
                        padding: "1rem",
                        borderRadius: "15px",
                        background: "var(--contentBody)"
                    }} >
                        <h4>Key Responsibilities of an Intern</h4>
                        <ul>
                            <li>Develop the overall layout and production design of web pages in a website.</li>
                            <li>Establish and promote design guidelines, best practices, and standards</li>
                            <li>Retrieving content (images, icons) from relevant sources.</li>
                            <li>Creating unique, effective web designs using the supplied/available resources</li>
                            <li>Create UI Designing for Responsive Mobile Application Interface.</li>
                            <li>Creating professional and conceptualized logos.</li>
                            <li>Communicating design ideas using user flows, process flows, site maps, and wireframes.</li>
                        </ul>
                    </div>
                    <div className="keyResponsibility" style = {{
                        padding: "1rem",
                        borderRadius: "15px",
                        background: "var(--contentBody)"
                    }} >
                        <h4>Hiring Process</h4>
                        <ul>
                            <li>Develop the overall layout and production design of web pages in a website.</li>
                            <li>Establish and promote design guidelines, best practices, and standards</li>
                            <li>Retrieving content (images, icons) from relevant sources.</li>
                            <li>Creating unique, effective web designs using the supplied/available resources</li>
                            <li>Create UI Designing for Responsive Mobile Application Interface.</li>
                            <li>Creating professional and conceptualized logos.</li>
                            <li>Communicating design ideas using user flows, process flows, site maps, and wireframes.</li>
                        </ul>
                    </div>
                </div>
                <div className="rightProfile" style = {{backgroundColor: "var(--cardColor)" }}>
                    <div className="keyResponsibility" style = {{
                        padding: "1rem",
                        borderRadius: "15px",
                        background: "var(--contentBody)"
                    }} >
                        <h4>Skills - Mandatory</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                        </ul>
                    </div>
                    <div className="keyResponsibility" style = {{
                        padding: "1rem",
                        borderRadius: "15px",
                        background: "var(--contentBody)"
                    }} >
                        <h4>Skills - Optional</h4>
                        <ul>
                            <li>React JS</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="keyResponsibility" style = {{
                        padding: "1rem",
                        borderRadius: "15px",
                        background: "var(--contentBody)"
                    }} >
                        <h4>Extra Benefits</h4>
                        <ul>
                            <li>Letter of Recommendation</li>
                            <li>Certificate</li>
                            <li>Job Letter</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleIndustryListing