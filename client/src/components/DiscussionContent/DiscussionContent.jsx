import React, { useState } from 'react'
import {Link} from "react-router-dom";
import 'animate.css';

import { IconButton, Button, TextField } from '@mui/material'
import { Groups, AddCircleOutlined, Send } from '@mui/icons-material'

import './DiscussionContent.css'
import DiscussionContainer from './DiscussionContainer/DiscussionContainer'
import DomainSelector from '../CustomSelector/DomainSelector'
import TechnologySelector from '../CustomSelector/TechnologySelector'
import RichTextEditor from '../RichTextEditor/RichTextEditor';

const DiscussionContent = () => {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="discussionContent">
        <div className="discussionHeading">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h3>Discussions</h3>
            <IconButton aria-label="delete" onClick={() => setShowPopup(true)}>
              <AddCircleOutlined style={{ color: "var(--orange)" }} />
            </IconButton>
          </div>
          <Groups />
        </div>
        <div className="hl" style={{ height: "auto" }}></div>
        <DiscussionContainer />
      </div>

      <div className={` popupContainer ${showPopup ? "show" : ""}`}>
        <div className={`popup ${showPopup ? "show" : ""}`}>
          <form action="">
            <div className="formGroup itemOne">
              <TextField
                id="outlined-basic"
                label="Enter Title"
                variant="outlined"
                size="small"
                style={{ width: "50%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
              />
              <div className="itemOneBtns">
                <Button
                  style={{ textTransform: "capitalize" }}
                  variant="contained"
                  color="error"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </Button>
                <Link to = '/student/community/discussionOne'>
                  <Button
                    style={{ textTransform: "capitalize", gap: "1rem" }}
                    variant="contained"
                  >
                    Post <Send />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="formGroup itemTwo">
              <div className="left">
                <DomainSelector style={{ width: "100%" }} title = {'Select from Domain'} />
              </div>
              <div className="right">
                <TechnologySelector style={{ width: "100%" }} />
              </div>
            </div>
            <div className="formGroup itemThree">
              <RichTextEditor />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DiscussionContent