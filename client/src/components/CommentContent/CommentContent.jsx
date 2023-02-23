import React, { useState} from 'react'

import CommentContainer from './CommentContainer/CommentContainer'

import { IconButton, TextField, Button } from '@mui/material'
import { Comment, AddCircleOutline } from '@mui/icons-material'

import CurrentUser from '../../assets/images/siddheshProfilePhoto.png'

import './CommentContent.css'

const CommentContent = () => {

    const [isCommentOpen, setIsCommentOpen] = useState(false);

    return (

        <div className = "commentContent">

            <div className = "commentTitle">
                <h4>Comments</h4>
                <Comment />
                <IconButton aria-label = "delete">
                    <AddCircleOutline style = {{ color: "var(--orange)" }} onClick = {() => setIsCommentOpen(true) }/>
                </IconButton>
            </div>
            
            <div className = "hl"></div>

            {
                isCommentOpen &&
                <div className = "addComment">
                    <div className = "leftAddComment">
                        <img src = {CurrentUser} width = "40px" height = "40px" alt = "" />
                    </div>
                    <div className = "rightAddComment">
                        <TextField className = "textInput" id = "standard-basic" label = "Add a comment ..." variant = "standard" />
                        <div className = "commentBtns">
                            <Button variant = "contained" color = "error" style = {{ textTransform: "capitalize" }} onClick = {() => setIsCommentOpen(false) }>Cancel</Button>
                            <Button variant = "contained" color = "primary" style = {{ textTransform: "capitalize" }} onClick = {() => setIsCommentOpen(false) }>Comment</Button>
                        </div>
                    </div>
                </div>
            }

            <CommentContainer />

        </div>

  )

}

export default CommentContent