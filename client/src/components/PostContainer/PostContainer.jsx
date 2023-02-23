import React from 'react' 
import { useLocation } from 'react-router-dom';

import PostData from '../../data/PostData'
import BoardBanner from '../BoardBanner/BoardBanner';
import CollegeBanner from '../CollegeBanner/CollegeBanner';
import Post from '../Post/Post'

import './PostContainer.css'

const PostContainer = ({ selectedOption }) => {

    const currentPathname = useLocation().pathname;

    return (
        <div className="postContainer">

            <div>

                { selectedOption.name === 'My College' &&  <CollegeBanner /> }

                {
                    (selectedOption.name === 'My Feed' || selectedOption.name === 'Trending') && 
                    <div className = "feedHeader">
                        <selectedOption.icon />
                        <h2>{selectedOption.name}</h2>
                    </div>
                }  
                    
                { 
                    (selectedOption.name !== 'My Feed' && selectedOption.name !== 'Trending' && selectedOption.name !== 'My College') && 
                        <BoardBanner props = {selectedOption}/>
                }
                
            </div>
            
            {
                PostData.map((post, index) => {
                    return (
                        <Post 
                            data = { post }
                            key = { index }
                        />
                    )
                })
            }
        </div>
    )
}

export default PostContainer;