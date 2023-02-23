import React from 'react'

import Discussion from '../../DiscussionContent/Discussion/Discussion'
import DiscussionData from '../../../data/DiscussionData'

import './DiscussionContainer.css'

const DiscussionContainer = () => {
  return (
    <div className="discussionContainer">
        {
            DiscussionData.map((discussion, id) => {
                return (
                    <Discussion 
                        discussion = {discussion}
                        id = {id}
                    />
                )
            })
        }
    </div>
  )
}

export default DiscussionContainer