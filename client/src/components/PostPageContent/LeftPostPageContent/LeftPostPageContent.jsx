import React from 'react'

import PostData from '../../../data/PostData'

import './LeftPostPageContent.css'
import CommentContent from '../../CommentContent/CommentContent';
import Post from '../../Post/Post';

const LeftPostPageContent = () => {
    return (
        <div className = "leftPostPageContent">
            <div className = "singlePost">
                <Post data={PostData[0]} />
                <CommentContent />
            </div>
        </div>
    )
}

export default LeftPostPageContent