import React, {useState} from 'react'
import { 
    IconButton, 
    Button, 
    Stack, 
    Typography, 
    Box, 
    Divider, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon,
    ListItemAvatar, 
    ListItemText,
    ListSubheader,
    TextField,
    InputAdornment,
    Avatar,
    Grid,
    Chip,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Accordion,
    AccordionSummary,
    AccordionDetails
  } from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import GroupsIcon from '@mui/icons-material/Groups';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

import "./Assignment.css"
import ProjectPic from "../../../../assets/images/vishalProject.png"

function Assignment() {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [assignmentMarks, setAssignmentMarks] = useState("");

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

  return (
    <div className='assignmentBody'>
        <div className="assignmentBodyContent">
            <Stack direction = "row">
                <div
                    style={{ display: "flex", justifyContent: "space-between", width: "-webkit-fill-available" }}
                >
                    <IconButton aria-label="back" component = {Link} to = "/faculty/classroom/class">
                        <BackIcon />
                    </IconButton>
                    <div
                        className="searchClass"
                        style={{ display: "flex", justifyContent: "space-between", width: "-webkit-fill-available" }}
                    >
                        <Box
                            sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: 'fit-content',
                            '& svg': {
                                m: 1.5,
                            },
                            '& hr': {
                                mx: 0.5,
                            },
                            }}
                        >
                            <Stack direction = "column" sx={{alignItems: "center"}}>
                                <Typography variant='caption2'>0</Typography>
                                <Typography variant='body2'>Turned In</Typography>
                            </Stack>
                            <Divider orientation="vertical" flexItem color="black"/>
                            <Stack direction = "column" sx={{alignItems: "center"}}>
                                <Typography variant='caption2'>1</Typography>
                                <Typography variant='body2'>Assigned</Typography>
                            </Stack>
                        </Box>
                        <Button
                        variant="contained"
                        color="primary"
                        // onClick = {() => {setCreateAssignmentDialog(true)}}
                        style={{
                            padding: "0 1rem",
                            textTransform: "capitalize",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            width: "200px",
                            fontWeight: "bold",
                        }}
                        >
                            Return Assignment
                        </Button>
                    </div>
                </div>
            </Stack>
            <Divider color="black"/>
            <Box>
                <Stack direction="row" spacing={2}>
                    <Box 
                    sx={{ 
                        width: '100%', 
                        maxWidth: 300, 
                        bgcolor: 'background.paper', 
                        border: "1px solid #adadad", 
                        borderRadius: "10px"
                        }}
                    >
                        <nav aria-label="main assignment teams">
                            <List
                            subheader={
                                <ListSubheader component = "div" id="submittedList" style={{borderRadius: "10px"}}>
                                    Submitted
                                </ListSubheader>
                            }    
                            >
                            <ListItem disablePadding divider>
                                <ListItemButton 
                                    selected={selectedIndex === 0}
                                    onClick={(event) => handleListItemClick(event, 0)}
                                >
                                    <ListItemIcon>
                                        <GroupsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Team-1" secondary="status"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding divider>
                                <ListItemButton
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)}
                                >
                                    <ListItemIcon>
                                        <GroupsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Team-2" secondary="status"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding divider>
                                <ListItemButton
                                    selected={selectedIndex === 2}
                                    onClick={(event) => handleListItemClick(event, 2)}
                                >
                                    <ListItemIcon>
                                        <GroupsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Team-3" secondary="status"/>
                                </ListItemButton>
                            </ListItem>
                            </List>
                        </nav>
                    </Box>
                    <Box 
                    sx={{ 
                        width: '100%', 
                        bgcolor: 'background.paper', 
                        border: "1px solid #adadad", 
                        borderRadius: "10px",
                        padding: "20px"
                        }}
                    >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="Assignment Details"
                            >
                                <Stack 
                                direction = "row" 
                                sx={{
                                    alignItems: "center", 
                                    justifyContent: "space-between", 
                                    minWidth: "-webkit-fill-available"
                                    }}
                                >
                                    <Typography variant='h6'>Assignment Title</Typography>
                                    <Typography variant='body2'>Posted On: </Typography>
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant='body2' gutterBottom>
                                    Assignment Description: 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                <Divider sx={{paddingBottom: "inherit"}} />
                                <Typography variant='body2' sx={{paddingTop: "inherit", paddingBottom: "inherit"}} gutterBottom>
                                    Assignment Materials: 
                                </Typography>
                                <Grid container spacing={"10"} >
                                    <Grid item style = {{display: 'flex'}}>
                                        <Chip 
                                            label="material-1.pdf" 
                                            variant="outlined" 
                                            component = {Link} 
                                            to = "/material.pdf" 
                                            color = "secondary" clickable
                                        />
                                    </Grid>
                                    <Grid item style = {{display: 'flex'}}>
                                        <Chip 
                                            label="material-2.jpg" 
                                            variant="outlined" 
                                            component = {Link} 
                                            to = "/material.pdf" 
                                            color = "secondary" clickable
                                        />
                                    </Grid>
                                    <Grid item style = {{display: 'flex'}}>
                                        <Chip 
                                            label="material-3.ppt" 
                                            variant="outlined" 
                                            component = {Link} 
                                            to = "/material.pdf" 
                                            color = "secondary" clickable
                                        />
                                    </Grid>
                                    <Grid item style = {{display: 'flex'}}>
                                        <Chip 
                                            label="material-4.img" 
                                            variant="outlined" 
                                            component = {Link} 
                                            to = "/material.pdf" 
                                            color = "secondary" clickable
                                        />
                                    </Grid>
                                    <Grid item style = {{display: 'flex'}}>
                                        <Chip 
                                            label="material-1.pdf" 
                                            variant="outlined" 
                                            component = {Link} 
                                            to = "/material.pdf" 
                                            color = "secondary" clickable
                                        />
                                    </Grid>
                                    <Grid item style = {{display: 'flex'}}>
                                        <Chip 
                                            label="material-1.pdf" 
                                            variant="outlined" 
                                            component = {Link} 
                                            to = "/material.pdf" 
                                            color = "secondary" clickable
                                        />
                                    </Grid>
                                    <Grid item style = {{display: 'flex'}}>
                                        <Chip 
                                            label="material-1.pdf" 
                                            variant="outlined" 
                                            component = {Link} 
                                            to = "/material.pdf" 
                                            color = "secondary" clickable
                                        />
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Stack direction = "row" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <Typography variant='body1' component="div" >
                                Team Name: 
                            </Typography>
                            <TextField
                                id="assignmentMarks"
                                label="Marks"
                                color='success'
                                margin="dense"
                                size="small"
                                style={{width: "150px"}}
                                value={assignmentMarks}
                                onChange={(e) => setAssignmentMarks(e.target.value)}
                                InputProps={{
                                    endAdornment: <InputAdornment position="start">/100</InputAdornment>,
                                }}
                            />
                        </Stack>
                        <List sx={{paddingBottom: "inherit"}}> 
                        <Stack 
                                direction = "row" 
                                sx={{
                                    alignItems: "center", 
                                    justifyContent: "space-between", 
                                    minWidth: "-webkit-fill-available"
                                    }}
                                >
                                    <Typography variant='body1'>Team Details: </Typography>
                                    <Typography variant='body2'>Submitted On: </Typography>
                                </Stack>
                            <ListItem disablePadding divider>
                                <ListItemButton >
                                    <ListItemAvatar>
                                        <Avatar />
                                    </ListItemAvatar>
                                    <ListItemText primary="Gurleen Pannu" secondary="Leader"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding divider>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar />
                                    </ListItemAvatar>
                                    <ListItemText primary="Ninad Patil" secondary="Member"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding divider>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar />
                                    </ListItemAvatar>
                                    <ListItemText primary="Siddhesh Mane" secondary="Member"/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Typography variant='body1' component="div" gutterBottom>
                            Project Link: 
                        </Typography>
                        <div style={{ 
                            display: "flex", 
                            justifyContent: "center", 
                            width: "-webkit-fill-available", 
                            paddingBottom: "inherit" 
                        }}>    
                            <Card>
                                <CardActionArea  component = {Link} to = "/project-panel">
                                    <CardMedia
                                    component="img"
                                    height="250"
                                    image={ProjectPic}
                                    alt="project image"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Advanced ERP System
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        I built a ERP System for College Management system using latest web development technologies
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <Typography variant='body1' component="div" gutterBottom>
                            Materials: 
                        </Typography>
                        <Grid container spacing={"10"} >
                            <Grid item style = {{display: 'flex'}}>
                                <Chip 
                                    label="material-1.pdf" 
                                    variant="outlined" 
                                    component = {Link} 
                                    to = "/material.pdf" 
                                    color = "secondary" clickable
                                />
                            </Grid>
                            <Grid item style = {{display: 'flex'}}>
                                <Chip 
                                    label="material-2.jpg" 
                                    variant="outlined" 
                                    component = {Link} 
                                    to = "/material.pdf" 
                                    color = "secondary" clickable
                                />
                            </Grid>
                            <Grid item style = {{display: 'flex'}}>
                                <Chip 
                                    label="material-3.ppt" 
                                    variant="outlined" 
                                    component = {Link} 
                                    to = "/material.pdf" 
                                    color = "secondary" clickable
                                />
                            </Grid>
                            <Grid item style = {{display: 'flex'}}>
                                <Chip 
                                    label="material-4.img" 
                                    variant="outlined" 
                                    component = {Link} 
                                    to = "/material.pdf" 
                                    color = "secondary" clickable
                                />
                            </Grid>
                            <Grid item style = {{display: 'flex'}}>
                                <Chip 
                                    label="material-1.pdf" 
                                    variant="outlined" 
                                    component = {Link} 
                                    to = "/material.pdf" 
                                    color = "secondary" clickable
                                />
                            </Grid>
                            <Grid item style = {{display: 'flex'}}>
                                <Chip 
                                    label="material-1.pdf" 
                                    variant="outlined" 
                                    component = {Link} 
                                    to = "/material.pdf" 
                                    color = "secondary" clickable
                                />
                            </Grid>
                            <Grid item style = {{display: 'flex'}}>
                                <Chip 
                                    label="material-1.pdf" 
                                    variant="outlined" 
                                    component = {Link} 
                                    to = "/material.pdf" 
                                    color = "secondary" clickable
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Box>
        </div>
    </div>
  )
}

export default Assignment