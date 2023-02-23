
import React from 'react'

import ProfileInfo from '../../../../components/ProfilePage/ProfileInfo/ProfileInfo'
import Skills from '../../../../components/ProfilePage/Skills/Skills'
import SocialMedia from '../../../../components/ProfilePage/SocialMedia/SocialMedia'
import TagLine from '../../../../components/ProfilePage/TagLine/TagLine'

import './Private.css'

const Private = () => {

    return (
        <div className="private">
            <div className="profileSection">
                <div className="leftProfile">
                    <ProfileInfo />
                </div>
                <div className="rightProfile">
                    <SocialMedia />
                    <TagLine />
                    <Skills />
                </div>
            </div>
        </div>
    )
}

export default Private