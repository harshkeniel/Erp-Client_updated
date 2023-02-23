import React from 'react'
import DiscussionPageContent from '../../../components/DiscussionPageContent/DiscussionPageContent'

import './DiscussionPage.css'

const DiscussionPage = () => {
    return (
        <div className="discussionPage">
            <div className="singleDiscussion">
                <DiscussionPageContent />
            </div>
        </div>
    )
}

export default DiscussionPage