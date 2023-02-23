import React from 'react'

import './AdminAnalytics.css'

const AdminAnalytics = () => {
    return (
        <div className="adminAnalytics" >
            <iframe src="https://sih-2022-analytics-dashboard.herokuapp.com/" frameborder="0" title = "College Analytics"></iframe>
        </div>
    )
}

export default AdminAnalytics