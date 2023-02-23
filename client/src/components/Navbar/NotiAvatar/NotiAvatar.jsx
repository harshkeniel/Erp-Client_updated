import React from 'react'


import { useLocation } from 'react-router-dom'

import { Notifications } from '@mui/icons-material'

import { Button, IconButton, Menu, MenuItem } from '@mui/material'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import User from '../../../assets/images/vishalProfilePhoto.jpg'

import './NotiAvatar.css'
import { Link } from 'react-router-dom'

const NotiAvatar = () => {

  const currentPathname = useLocation().pathname;

  return (
    <div className = "notiAvatar">
      <div className = "notiAvatarMenu">

      < PopupState variant = "popover" popupId = "demo-popup-menu">
          {(popupState) => (
              <React.Fragment>
              <Notifications fontSize = 'large' />
              <IconButton variant = "contained" {...bindTrigger(popupState)}>
                {
                  currentPathname.startsWith('/college-admin') || currentPathname.startsWith('/industry')
                  ? ''
                  :  <img className = "avatarIcon" src = { User } alt = "" />
                }
              </IconButton>
              <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick = { popupState.close }><Link to = "/student/profile/edit">My Profile</Link></MenuItem>
                  <MenuItem onClick = { popupState.close }>
                    <Button variant = "contained" color = "error" style = {{
                      textTransform: "capitalize", 
                      fontFamily: "Poppins", 
                      fontSize: "14px", 
                    }}>
                      Logout
                    </Button>
                  </MenuItem>
              </Menu>
              </React.Fragment>
          )}
      </PopupState>

      </div>
    </div>
  )
}

export default NotiAvatar