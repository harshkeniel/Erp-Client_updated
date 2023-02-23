import React from "react";

import UpdatesContainer from '../UpdatesContainer/UpdatesContainer'

import { NotificationsActive } from "@mui/icons-material/";

import "./UpdateCard.css";

const UpdateCard = () => {
  return (
    <div className = "updateCard">
      <h4>
        <NotificationsActive style = {{ color: "var(--orange)" }} />
          Updates and Notifications
      </h4>
      <UpdatesContainer />
    </div>
  );
};

export default UpdateCard;
