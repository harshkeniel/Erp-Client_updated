import React from 'react'

import DomainSelector from '../CustomSelector/DomainSelector'
import TechnologySelector from '../CustomSelector/TechnologySelector'

import { LocalOffer } from '@mui/icons-material';

import './TagFilter.css'

const TagFilter = () => {
  return (
    <div className = "projectInfo" style = {{ height: "max-content" }} >
        <div className = "projectHeading">
            <h3>Tags</h3>
            <LocalOffer />
         </div>
        <div className = "hl" style = {{ height: "auto" }}></div>
        <div className = "creators" style = {{ width: "300px" }} >
          <DomainSelector title = {'Select from Domain'}/>  
        </div>
        <div className = "hl" style = {{ height: "auto" }}></div>
        <div className = "resources" style = {{ width: "300px" }} >
          <TechnologySelector />
        </div>
    </div>

  )
}

export default TagFilter