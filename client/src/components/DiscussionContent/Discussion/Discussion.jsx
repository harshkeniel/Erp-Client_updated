import React from "react";

import { IconButton } from "@mui/material";
import { Comment, Visibility } from "@mui/icons-material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons'

import "./Discussion.css";

const Discussion = ({ discussion }) => {
  return (
    <a href="/student/community/discussionOne">
      <div className="discussion">
        <div className="discussionLeft">
          <div className="discussionTitle">
            <img
              src={discussion.discussionAuthorPic}
              alt=""
            />
            <h4> {discussion.discussionAuthor} </h4>
          </div>
          <div className="discussionDescription">
            <p> {discussion.title} </p>
          </div>
          <div className="discussionTags">
            {discussion.tags.map((tag, id) => {
              return (
                <div
                  style={{
                    borderRadius: "10px",
                    padding: "6px",
                    backgroundColor: tag.color,
                    minWidth: "100px",
                    textAlign: "",
                  }}
                >
                  <h5> {tag.name} </h5>
                </div>
              );
            })}
          </div>
        </div>
        <div className="discussionRight">
          <div className="discussionIcons">
            <IconButton>
              <Comment style={{ fontSize: "20px", color: "var(--black)" }} />
            </IconButton>
            <h4> {discussion.discussionComments} </h4>
          </div>
          <div className="discussionIcons">
            <IconButton>
              <FontAwesomeIcon icon={faHandsClapping} style={{ fontSize: "20px", color: "var(--black)" }} />
            </IconButton>
            <h4> {discussion.discussionVotes} </h4>
          </div>
          <div className="discussionIcons">
            <IconButton>
              <Visibility style={{ fontSize: "20px", color: "var(--black)" }} />
            </IconButton>
            <h4> {discussion.discussionViews} </h4>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Discussion;
