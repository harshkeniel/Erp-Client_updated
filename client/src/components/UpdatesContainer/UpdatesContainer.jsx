import React from 'react'

import UpdatesData from '../../data/UpdatesData';

import './UpdatesContainer.css'

const UpdatesContainer = () => {
  return (
    <div className = "updatesContainer">
        {
            UpdatesData.map((update, index) => {
                return (
                    <div className = "update" key={index}>
                        <p>{update.title}</p>
                        <div className="info">
                            <p>{update.posted} ago</p>
                            <p>{update.readers} Readers</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UpdatesContainer