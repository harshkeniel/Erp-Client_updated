import React from 'react'

import CommentData from '../../../data/commentData'
import Comment from '../Comment/Comment'

import './CommentContainer.css'

const CommentContainer = () => {

    return (
        
        <div className = "commentContainer">
            {
                CommentData.map((comment, id) => {
                    return (

                        <>
                            <Comment 
                                data = { comment }
                                id = { id }
                            />
                        </>
                    )
                })
            }
        </div>
    )
}

export default CommentContainer