import React from "react";

import CoverPhoto from '../../assets/images/coverPhoto1.png'
import ProfilePhoto from '../../assets/images/vishalProfilePhoto.jpg';

import "./ProfileCard.css";

const ProfileCard = () => {
  
  const ProfilePage = true;

  return (

    <div className = "profileCard">

      <div className = "profileImages">
        <img src = { CoverPhoto } alt = "" />
        <img src = { ProfilePhoto } alt = "" />
      </div>

      <div className = "profileName">
        <span className = "title">Vishal Pandey</span>
        <span className = "subTitle">SDE Intern at AY International</span>
      </div>

      <div className = "followStatus">
        <div className = "hl"></div>
        <div>
          {ProfilePage && (
            <>
              <div className = "follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
          <div className = "vl"></div>
          <div className = "follow">
            <span>3,450</span>
            <span>Followings</span>
          </div>
          <div className = "vl"></div>
          <div className = "follow">
            <span>2,342</span>
            <span>Followers</span>
          </div>
        </div>
        <div className = "hl"></div>
      </div>

      {ProfilePage ? "" : <span>My Profile</span>}
    
    </div>
  );
};

export default ProfileCard;