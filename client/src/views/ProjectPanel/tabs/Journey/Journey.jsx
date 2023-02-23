import React from 'react'

import {Button} from '@mui/material'

import './Journey.css'

import StoryData from '../../../../data/StoryData'
import journey from '../../../../assets/images/journey.png'

const Journey = () => {
  return (
    <div className="card journey" style = {{ height: "auto" }} >
        <div className="left">
          <h2>Project Journey</h2>
          <img src = {journey} alt = "" />
          <div className="journeyInfo">
            <h3 style = {{ textAlign: "center" }}>Record project milestones and changes</h3>
            <p style = {{ textAlign: "center" }}>Share your completed milestones with the community (and your users!) to stay accountable and build trust.</p>
            <div className="hl"></div>
            <p>Log all sorts of things:</p>
            <ul>
              <li>✨ Features</li>
              <li>🐛 Bugs</li>
              <li>🛠 Chores</li>
              <li>🚀 Releases</li>
              <li>😡 Annoyances</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="journeyContainer">

            {
              StoryData.map((story, id) => {
                return (
                  <div className="journeyItem">
                  <div className="above">
                    <h3>{story.title}</h3>
                    <div className="tags">
                        <div style = {{ borderRadius: '10px', padding: '3px 6px',  backgroundColor: story.tag.color, color: 'var(--black' }} >
                              <h5>{story.tag.type}</h5>
                        </div>
                        <div style = {{ borderRadius: '10px', padding: '3px 6px',  backgroundColor: 'var(--contentBody)', color: 'var(--black' }} >
                            <h5>{story.datePosted}</h5>
                        </div>
                    </div>
                  </div>
                  <div className="below">
                    <p>{story.description}</p>
                  </div>
                </div>
                )
              })
            }

          </div>
        </div>
    </div>
  )
}

export default Journey