import React from 'react'

import FeedFilter from '../FeedFilter/FeedFilter'
import PostContainer from '../PostContainer/PostContainer'
import feedData from '../../data/feedData'

import './HomeContent.css'
import RightHomeContent from './RightHomeContent/RightHomeContent'

const HomeContent = () => {

  const [ selectedOption, setSelectedOption ] = React.useState({type : "feed", ...feedData[0]})

  return (
    <div className = "homeContent">
  
        <div className="left">
          <FeedFilter 
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>

        <div className="middle">
          <PostContainer 
            selectedOption={selectedOption}
          />
        </div>
        
        <div className="right">
          <RightHomeContent 
            selectedOption = {selectedOption}
          />
        </div>
  
    </div>
  )
}

export default HomeContent

// { selectedOption.name === 'My College' &&  <CollegeBanner /> }
//                 { (selectedOption.name !== 'My College' ) && 
//                     <BoardBanner props = {selectedOption}/>
//                 }