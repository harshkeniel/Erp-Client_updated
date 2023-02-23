import React, { useState} from 'react'
import { Markup } from 'interweave';
import {Link} from "react-router-dom";
  
import CommentContent from '../CommentContent/CommentContent'
import DomainSelector from '../CustomSelector/DomainSelector'
import TechnologySelector from '../CustomSelector/TechnologySelector'
import RichTextEditor from '../RichTextEditor/RichTextEditor';
import data from '../../data/SingleDiscussionData'

import { IconButton, Avatar, Menu, MenuItem, TextField, Button } from '@mui/material'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { ArrowBackIosNew, KeyboardArrowUpOutlined, KeyboardArrowDownOutlined, Edit, Delete, Flag, MoreVert }  from '@mui/icons-material/';

import SiddheshPic from '../../assets/images/siddheshProfilePhoto.png'

import './DiscussionPageContent.css'

const DiscussionPageContent = () => {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="discussionPageContent">
            <div className="leftContent">
                <div className="aboveContent">
                    <div className="singleDiscussionHeading">
                        <div className="left">
                            <div className="backBtn">
                                <Link to = '/student/community'>
                                    <IconButton>
                                        <ArrowBackIosNew style = {{ fontSize: '14px' }} /> 
                                    </IconButton>
                                </Link>
                            </div>
                            <div className="heading">
                                <h5>Should I prefer Javascript for my project’s Frontend or use a framework like React ?</h5>
                            </div>
                        </div>
                        <div className="right">
                            <div className = "dots">
                                <PopupState variant = "popover" popupId = "demo-popup-menu">
                                    {(popupState) => (
                                        <React.Fragment>
                                        <IconButton variant = "contained" {...bindTrigger(popupState)}>
                                            <MoreVert />
                                        </IconButton>
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem onClick = { popupState.close }><Edit style = {{ color: 'blue' }} onClick = {() => setShowPopup(true)} /></MenuItem>
                                            <MenuItem onClick = { popupState.close }><Delete style = {{ color: 'red' }} /></MenuItem>
                                            <MenuItem onClick = { popupState.close }><Flag /></MenuItem>
                                        </Menu>
                                        </React.Fragment>
                                    )}
                                </PopupState>
                            </div>
                        </div>
                    </div>
                    <div className="singleDiscussionBody">
                        <div className="discussionBodyLeft">
                            <IconButton aria-label = "delete">
                                <KeyboardArrowUpOutlined /> 
                            </IconButton>
                            <h5>93</h5> 
                            <IconButton aria-label = "delete">
                                <KeyboardArrowDownOutlined /> 
                            </IconButton>
                        </div>
                        <div className="discussionBodyRight">
                            <div className="discusssionAuthorInfo">
                                <Avatar alt="Siddhesh Mane" src={SiddheshPic} />
                                <h5>Siddhesh Mane</h5>
                                <h6>Latest Updated on: 14th August 2022</h6> 
                            </div>
                            <div className="dicussionBodyRightContent">
                                <Markup content={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="belowContent">
                    <CommentContent />
                </div>
            </div>
            {/* <div className="rightContent">
                Right Discussion Page Content
            </div> */}

            <div className={` popupContainer ${showPopup ? "show" : ""}`}>
                <div className={`popup ${showPopup ? "show" : ""}`}>
                    <form action="">
                        <div className="formGroup itemOne">
                            <TextField
                                id="outlined-basic"
                                label="Enter Title"
                                variant="outlined"
                                size="small"
                                style={{ width: "50%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                            />
                            <div className="itemOneBtns">
                                <Button
                                    style={{ textTransform: "capitalize" }}
                                    variant="contained"
                                    color="error"
                                    onClick={() => setShowPopup(false)}
                                >
                                    Close
                                </Button>
                                <Button
                                    style={{ textTransform: "capitalize", gap: "1rem" }}
                                    variant="contained"
                                    color = "success"
                                    onClick={() => setShowPopup(false)}
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                        <div className="formGroup itemTwo">
                            <div className="left">
                                <DomainSelector style={{ width: "100%" }} title = {'Select from Domain'}/>
                            </div>
                            <div className="right">
                                <TechnologySelector style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="formGroup itemThree">
                            <RichTextEditor />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DiscussionPageContent

