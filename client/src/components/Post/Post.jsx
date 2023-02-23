import React from 'react'
import { useLocation } from 'react-router-dom';

import { Comment, Share, BookmarkOutlined } from '@mui/icons-material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'

import ClapButton from './ClapButton/ClapButton';

import './Post.css'

const Post = ( {data} ) => {

    const currentPathname = useLocation().pathname;

    return (

        <div className = "post">
            <div className = "postInfo">
                <div className = "personalDetail">
                    <img className = "avatarIcon" src = { data.avatar } alt = "" />
                    <h4>{ data.name }</h4>
                </div>
                <div style = {{ borderRadius: '10px', padding: '6px',  backgroundColor: data.domainDetails.color }} >
                    <h5>{ data.domainDetails.domainName }</h5>
                </div>
            </div>

            <div className = "postDescription">
                <p> {data.title} </p>
            </div>

            <img src = { data.img } alt = "" />

            <div className = "postFooter">
                <div className="postButtons">
                    <ClapButton count={123} className={"postButton"} />
                    <button className="postButton">
                        <a href="/student/posts/postOne">
                            <Comment />
                            <span>512</span>
                        </a>
                    </button>
                    <button className="postButton">
                        <Share />
                        <span>Share</span>
                    </button>
                </div>
                
                {
                    currentPathname === '/college-admin' 
                    ? <FontAwesomeIcon icon={faThumbTack} />
                    : <BookmarkOutlined isActive = {true}/>
                }
            </div>
        </div>
        
        
    )
}

export default Post;