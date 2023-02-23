import React, { useState } from 'react'

import { IconButton, Menu, MenuItem, TextField, Button } from '@mui/material'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import {
  Edit,
  Delete,
  Flag,
  MoreVert,
  KeyboardArrowUpOutlined,
  KeyboardArrowDownOutlined,
  ReplyOutlined,
} from "@mui/icons-material";
import CommentIcon from '@mui/icons-material/Comment';

import CurrentUser from '../../../assets/images/siddheshProfilePhoto.png'
import SubComment from '../SubComment/SubComment'

import './Comment.css'

const Comment = ( { data } ) => {

    const [showReplies, setShowReplies] = useState(false);
    const [isEditCommentOpen, setisEditCommentOpen] = useState(false);
    const [isReplyOpen, setIsReplyOpen] = useState(false);

    const handleClick = () => {
        if (showReplies) setShowReplies(false);
        else setShowReplies(true);
    }

    const handleReply = () => {
        if (isEditCommentOpen) return;
        else setIsReplyOpen(true);
    }

    const handleComment = () => {
        if (isReplyOpen) return;
        else setisEditCommentOpen(true);
    }

    return (
        
        <div className = "comment">

            <div className = "commentLeft">
                <img src = { data.commentAuthorPic } alt = "" />
            </div>

            <div className = "commentRight">

                <div className = "authorInfo">

                    <div className = "authorHeading">
                    
                        <div className = "left">
                            <h5>{ data.commentAuthor }</h5>
                            <h6>Latest Updated on: { data.latestUpdated }</h6> 
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
                                        <MenuItem onClick = { popupState.close }><Edit style = {{ color: 'blue' }} onClick = {() => handleComment()} /></MenuItem>
                                        <MenuItem onClick = { popupState.close }><Delete style = {{ color: 'red' }} /></MenuItem>
                                        <MenuItem onClick = { popupState.close }><Flag /></MenuItem>
                                    </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        </div>

                    </div>

                    <div className = "authorSubHeading">
                        <p>{ data.description }</p>
                    </div>

                    <div className = "authorStats">
                    
                        <div className = "voteCount">
                            <IconButton aria-label = "delete">
                                <KeyboardArrowUpOutlined /> 
                            </IconButton>
                            <h5>{ data.commentVotes }</h5> 
                            <IconButton aria-label = "delete">
                                <KeyboardArrowDownOutlined /> 
                            </IconButton>
                        </div>
                    
                        <div className = "toggleReplies">
                            <Button variant = "outlined" style = {{ gap: "0.5rem", fontSize: "12px", color: "var(--black)" }} onClick = {() => handleClick() }>
                                <CommentIcon /> 
                                { showReplies && data.commentSubAuthors.length >= 0 && <p> Hide { data.commentSubAuthors.length } replies</p> }
                                { !showReplies && <p> Show { data.commentSubAuthors.length } replies</p>}
                            </Button>
                        </div>
                    
                        <div className = "reply">
                            <Button variant = "outlined" style = {{ gap: "0.5rem", fontSize: "12px", color: "var(--black)" }} onClick = {() => handleReply()}>
                                <ReplyOutlined /> Reply
                            </Button>
                        </div>

                    </div>
                    
                </div>

                {/* If Reply Button is Toggled */}
                {
                    isReplyOpen &&

                    <div className = "addComment">

                        <div className = "leftAddComment">
                            <img src = {CurrentUser} alt = "" />
                        </div>

                        <div className = "rightAddComment">
                            <TextField className = "textInput" id = "standard-basic" label = "Add a reply ..." variant = "standard" />
                            <div className = "commentBtns">
                                <Button variant = "contained" color = "error" style = {{ textTransform: "capitalize" }} onClick = {() => setIsReplyOpen(false) }>Cancel</Button>
                                <Button variant = "contained" color = "primary" style = {{ textTransform: "capitalize" }} onClick = {() => setIsReplyOpen(false) }>Comment</Button>
                            </div>
                        </div>

                    </div>
                }  

                {/* If Three Dots of Main Comment is Clicked */}
                {
                    isEditCommentOpen && 

                    <div className = "addComment">

                        <div className = "leftAddComment">
                            <img src = {CurrentUser} width = "40px" height = "40px" alt = "" />
                        </div>

                        <div className = "rightAddComment">
                            <TextField className = "textInput" id = "standard-basic" label = "Edit your comment ..." variant = "standard" defaultValue = "" />
                            <div className = "commentBtns">
                                <Button variant = "contained" color = "error" style = {{ textTransform: "capitalize" }} onClick = {() => setisEditCommentOpen(false) }>Cancel</Button>
                                <Button variant = "contained" color = "success" style = {{ textTransform: "capitalize" }} onClick = {() => setisEditCommentOpen(false) }>Edit</Button>
                            </div>
                        </div>

                    </div>
                }   

                {/* If Show Replies Button is Clicked */}
                {   
                    showReplies && 
                    data.commentSubAuthors.length > 0  &&

                    <div className = "subAuthorInfo">
                        {
                            data.commentSubAuthors.map((subComment, id) => {
                                return (
                                    <SubComment 
                                        subComment = {subComment}
                                        id = {id}
                                    />
                                )
                            })
                        }
                    </div>
                }

            </div>
        </div>
    )
}

export default Comment