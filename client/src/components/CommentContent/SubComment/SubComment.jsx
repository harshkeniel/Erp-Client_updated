import React, { useState } from 'react'

import { IconButton, Menu, MenuItem, TextField, Button, Avatar } from '@mui/material'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import {
  Edit,
  Delete,
  Flag,
  MoreVert,
  KeyboardArrowUpOutlined,
  KeyboardArrowDownOutlined
} from "@mui/icons-material";

import CurrentUser from '../../../assets/images/siddheshProfilePhoto.png'

const SubComment = ( {subComment} ) => {

    const [isEditReplyOpen, setIsEditReplyOpen] = useState(false);

    return (

        <div className = "subComment">

            <div className = "authorInfo">

            <div className = "authorHeading">

                <div className = "left">
                    <Avatar alt="Siddhesh Mane" src={subComment.commentAuthorPic} />
                    <h5>{ subComment.commentAuthor }</h5>
                    <h6>Latest Updated on: { subComment.latestUpdated }</h6> 
                    <div style = {{ borderRadius: '10px', padding: '3px 6px',  backgroundColor: 'lightgreen', color: 'var(--black' }} >
                        <h5>Creator</h5>
                    </div>
                </div>
                
                <div className = "dots">
                    <PopupState variant = "popover" popupId = "demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                            <IconButton variant = "contained" {...bindTrigger(popupState)}>
                                <MoreVert />
                            </IconButton>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}><Edit style = {{ color: 'blue'}} onClick = {() => setIsEditReplyOpen(true)} /></MenuItem>
                                <MenuItem onClick={popupState.close}><Delete style = {{ color: 'red'}} /></MenuItem>
                                <MenuItem onClick={popupState.close}><Flag /></MenuItem>
                            </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                </div>

            </div>

            <div className = "authorSubHeading">
                <p>{ subComment.description }</p>
            </div>
            
            <div className = "authorStats">
                <div className = "voteCount">
                    <IconButton aria-label = "delete">
                        <KeyboardArrowUpOutlined /> 
                    </IconButton>
                    <h5>{ subComment.commentVotes }</h5>
                    <IconButton aria-label = "delete">
                        <KeyboardArrowDownOutlined />
                    </IconButton>
                </div>
            </div>

            </div>

            {/* If Three Dots of Sub Comment is Clicked */}
            {
                isEditReplyOpen &&

                <div className = "addComment">
                    <div className = "leftAddComment">
                        <img src = {CurrentUser} width = "40px" height = "40px" alt = "" />
                    </div>
                    <div className = "rightAddComment">
                        <TextField className = "textInput" id = "standard-basic" label = "Edit your reply ..." variant = "standard" defaultValue = "" />
                        <div className = "commentBtns">
                            <Button variant = "contained" color = "error" style = {{ textTransform: "capitalize" }} onClick = {() => setIsEditReplyOpen(false) }>Cancel</Button>
                            <Button variant = "contained" color = "success" style = {{ textTransform: "capitalize" }} onClick = {() => setIsEditReplyOpen(false) }>Edit</Button>
                        </div>
                    </div>
                </div>
            }   
        </div>
    )
}

export default SubComment