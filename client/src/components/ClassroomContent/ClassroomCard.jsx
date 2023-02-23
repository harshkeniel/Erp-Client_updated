import React from 'react'
import { Avatar, Box , Card, CardContent, CardMedia, CardActionArea, Typography, Stack} from '@mui/material';
import { Link } from 'react-router-dom';

function ClassroomCard({code, className, facultyName, facultyImg, classroomImg, initialAssignmentData}) {
  return (
    <Box width = "300px">
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%'}}>
            <CardActionArea 
            component = {Link} 
            state = {{
                code: code, 
                className: className, 
                facultyName: facultyName, 
                facultyImg: facultyImg, 
                classroomImg: classroomImg, 
                initialAssignmentData: initialAssignmentData
            }} 
            to = "/faculty/classroom/class"
            >
                <CardMedia
                    component="img"
                    height="120"
                    image={classroomImg}
                    alt="card background"
                />
                <CardContent>
                    <Stack direction = "row" justifyContent = "space-between" alignItems = "center" spacing={2}>
                        <div>
                            <Typography gutterBottom variant = "h6" component = "div">
                                {className}
                            </Typography>
                            <Typography variant = "body2" color = "text.secondary">
                                {facultyName}
                            </Typography>
                        </div>
                        <Avatar alt = {facultyName} src = {facultyImg} />
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    </Box>
  )
}

export default ClassroomCard