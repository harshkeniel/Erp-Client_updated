import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';

import Education from '../../../../components/ProfilePage/Education/Education'
import Projects from '../../../../components/ProfilePage/Projects/Projects';
import Certification from '../../../../components/ProfilePage/Certification/Certification'
import Skills from '../../../../components/ProfilePage//Skills/Skills'
import SocialMedia from '../../../../components/ProfilePage/SocialMedia/SocialMedia'
import TagLine from '../../../../components/ProfilePage//TagLine/TagLine'
import Work from '../../../../components/ProfilePage/Work/Work';
import Achievement from '../../../../components/ProfilePage/Achievement/Achievement';

import { Avatar, IconButton,} from '@mui/material'
import { FileDownload, Share } from '@mui/icons-material'

import SiddheshPic from '../../../../assets/images/siddheshProfilePhoto.png'
import Logo from '../../../../assets/images/appLogoIcon.png'

import './Public.css'

const Public = () => {

    const componentRef = useRef();

    return (
        <div className="public" id="pdf" ref={componentRef}>
            
            <div className="profileSection" >
                <div className="leftProfile">
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
                                    <ReactToPrint
                                        trigger={() => <IconButton ><FileDownload style = {{ color: "#438af6" }} /></IconButton>}
                                        content={() => componentRef.current}
                                        documentTitle = 'Resume'
                                    />
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
                </div>
                <div className="rightProfile">
                    <SocialMedia />
                    <TagLine />
                    <Education />
                    <Certification />
                    <Skills />
                </div>
            </div>
            
            <div className = "footer">
                <p>Generated by <span>Projectory</span></p>
                <div>
                    <img src = {Logo} alt = "" />
                </div>
            </div>

        </div>
    )
}

export default Public