import React from 'react'
import JobListingData from '../../../data/JobListingData'
import JobListing from '../JobListing'

const JobListingContainer = () => {
    return (
        <div className="jobListingContainer postContainer" style = {{ gap: "2rem"}}>

            <h1>My Job Listings</h1>

            {
                JobListingData.map((jobListing, id) => {
                    return (
                        <JobListing 
                            data = {jobListing}
                            id = {id}
                        />
                    )
                })
            }
        </div>
    )
}

export default JobListingContainer