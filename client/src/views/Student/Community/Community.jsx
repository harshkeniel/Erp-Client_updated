import React from 'react'

import './Community.css'

import DiscussionContent from '../../../components/DiscussionContent/DiscussionContent'
import TagFilter from '../../../components/TagFilter/TagFilter'
import { Web, PhoneAndroid, LocalFireDepartment, RemoveRedEye } from "@mui/icons-material";

import './Community.css'

const Community = () => {
  return (
    <div className="community">
        <div className="communityContent">
            <div className="filterBtns">
              {/* <Button variant = "contained" style  = {{ backgroundColor: "lightcoral" }} >Development</Button>
              <Button variant = "contained" style  = {{ backgroundColor: "lightgreen" }} >Most Votes</Button>
              <Button variant = "contained" style  = {{ backgroundColor: "lightskyblue" }} >Trending</Button>
              <Button variant = "contained" style  = {{ backgroundColor: "var(--orange)" }} >General Discussion</Button>
              <Button variant = "contained" style  = {{ backgroundColor: "var(--yellow" }} >Popular</Button> */}

              <div className="countCardContainer">
                <div
                  className="countCard"
                  style={{ 
                    maxWidth: "300px",
                    borderLeft: "8px solid lightcoral",
                    background: "rgb(226, 204, 2)" }}
                >
                  <div className="left">
                    <h4>Web Development</h4>
                  </div>
                  <div className="right">
                    <Web style={{ fontSize: "36px" }} />
                  </div>
                </div>

                <div
                  className="countCard"
                  style={{ 
                    maxWidth: "300px",
                    maxHeight: "100px",
                    borderLeft: "8px solid blue",
                    background: "rgb(135, 135, 221)" }}
                >
                  <div className="left">
                    <h4>Android Development</h4>
                  </div>
                  <div className="right">
                    <PhoneAndroid style={{ fontSize: "36px" }} />
                  </div>
                </div>

                <div
                  className="countCard"
                  style={{ 
                    maxWidth: "300px",
                    maxHeight: "100px",
                    borderLeft: "8px solid green",
                    background: "rgb(167, 167, 167)" }}
                >
                  <div className="left">
                    <h4>Trending Discussions</h4>
                  </div>
                  <div className="right">
                    <LocalFireDepartment style={{ fontSize: "36px" }} />
                  </div>
                </div>

                <div
                  className="countCard"
                  style={{ 
                    maxWidth: "300px",
                    maxHeight: "100px",
                    borderLeft: "8px solid #5858f1",
                    background: "lightblue" }} 
                >
                  <div className="left">
                    <h4>Most Votes</h4>
                  </div>
                  <div className="right">
                    <RemoveRedEye style={{ fontSize: "36px" }} />
                  </div>
                </div>

                <div
                  className="countCard"
                  style={{ 
                    maxWidth: "300px",
                    maxHeight: "100px",
                    borderLeft: "8px solid blue",
                    background: "rgb(135, 135, 221)" }}
                >
                  <div className="left">
                    <h4>Popular Discussions</h4>
                  </div>
                  <div className="right">
                    <RemoveRedEye style={{ fontSize: "36px" }} />
                  </div>
                </div>

            </div>
            </div>

            <div className="discussionBody">
              <DiscussionContent />
              <TagFilter />
            </div>
        </div>
    </div>
  )
}

export default Community