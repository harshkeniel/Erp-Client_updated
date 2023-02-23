import React from 'react'
import { Avatar, Box, Stack, Typography } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

function AssignmentCard({assignmentTitle, assignmentDue, noAssignments}) {
  return (
    <Box style = {{
    width : "100%", 
    border: "1px solid #adadad", 
    borderRadius: "10px", 
    padding: "15px", 
    background: "var(--cardColor)"}}
    >
        <Stack direction = "row" justifyContent = "flex-start" alignItems = "center" spacing={2}>
            <Avatar alt = "assignmentIcon" sx = {{bgcolor: "blue"}} >
              {
                noAssignments ? <ImageNotSupportedIcon /> : <AssignmentIcon />
              }
            </Avatar>
            <div>
            <Typography gutterBottom variant = "h6" component = "div">
                {assignmentTitle}
            </Typography>
            <Typography variant = "caption" component = "div">
                Posted: {assignmentDue}
            </Typography>
            </div>
        </Stack>
    </Box>
  )
}

export default AssignmentCard