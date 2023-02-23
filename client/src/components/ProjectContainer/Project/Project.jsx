import React from "react";

import { Avatar, AvatarGroup, Popover, IconButton } from "@mui/material";
import { Comment, ThumbUp, Visibility } from "@mui/icons-material";

import "./Project.css";

const Project = ({ data }) => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  
  return (
    
    <div
      className="projectCard"
      aria-owns={open ? "mouse-over-popover" : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <div className="coverImg">
        <img src={data.projectImg} alt="" />
      </div>

      <div className="projectDescription">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
      
      <div className="hl" style={{ width: "90%", margin: "0 auto" }}></div>
      
      <div className="projectDetails">
        <div
          style={{
            borderRadius: "10px",
            padding: "6px",
            backgroundColor: "lightgreen",
          }}
        >
          { data.members && data.members.length > 0 && <h4> { data.teamName }</h4> }
          { data.members && data.members.length === 0 && <h4> { data.creatorName } </h4> }
        </div>
        <AvatarGroup max={3}>
          { 
            data.members &&
            data.members.map((member, id) => {
              return (
                <Avatar alt={member.memberName} src={member.memberImg} />
              );
            })
          }
        </AvatarGroup>
        { data.members && data.members.length === 0 && <Avatar alt={data.creatorName} src={data.creatorImg} /> }
      </div>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        style={{ margin: "1rem" }}
      >
        <div
          className="discussionRight"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.25rem 1rem",
            gap: "1rem",
            textAlign: "center",
            borderRadius: "25px",
          }}
        >
          
          <div className="discussionIcons">
            <IconButton>
              <Comment style={{ fontSize: "20px", color: "var(--orange)" }} />
            </IconButton>
            <h5> {data.comments} </h5>
          </div>

          <div className="discussionIcons">
            <IconButton>
              <ThumbUp style={{ fontSize: "20px", color: "var(--orange)" }} />
            </IconButton>
            <h5> {data.claps} </h5>
          </div>
          
          <div className="discussionIcons">
            <IconButton>
              <Visibility
                style={{ fontSize: "20px", color: "var(--orange)" }}
              />
            </IconButton>
            <h5> {data.views} </h5>
          </div>

        </div>

      </Popover>
    
    </div>
  );
};

export default Project;