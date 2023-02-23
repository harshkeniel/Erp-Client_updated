import { Avatar, Button, Card, CardContent, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Input, InputLabel, Slide, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import classroomData from '../../../../data/classroomData';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Submissions = () => {

  const [joinedClass, setJoinedClass] = useState("");
  const [createAssignmentDialog, setCreateAssignmentDialog] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectMaterials, setProjectMaterials] = useState({});
  
  const handleClose = () => {
    setCreateAssignmentDialog(false); 
  };

  return (
    <div className="card d-flex" style={ { minHeight : "80vh"} }>
        {
          (joinedClass !== "") ? 
          <>
            <Dialog
              open={createAssignmentDialog}
              onClose={handleClose}
              TransitionComponent={Transition}
              maxWidth="sm"
              fullWidth
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Assignment Title</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Enter the details of your project for assignment
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Project Title"
                  type="text"
                  fullWidth
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  required
                />
                <TextField
                  margin="dense"
                  label="Project Description"
                  type="text"
                  fullWidth
                  multiline
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
                <InputLabel color="primary" style={{marginTop : "8px"}} htmlFor="projectMaterial">
                  <Input
                    type="file"
                    id="projectMaterial"
                    style = {{display: "none"}}
                    inputProps = {{multiple: true}}
                    onChange={(e) => setProjectMaterials(e.target.files)}
                  />
                    Upload Materials
                    <IconButton  color="primary" aria-label="upload materials" component="span">
                      <FileUploadIcon />
                    </IconButton>
                </InputLabel>
                <Grid container spacing={"4"}>
                  {
                    projectMaterials && 
                    Object.entries(projectMaterials).map(([key, value]) => {
                    return (
                      <Grid item style = {{display: 'flex'}}>
                        <Chip label={value.name} variant="outlined" color = "secondary" />
                      </Grid>
                      )
                    })
                  }
                      
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} variant = "outlined" color = "primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} variant = "contained" color = "primary">
                  Create
                </Button>
              </DialogActions>
            </Dialog>
            <Box width = "100%" style = {{padding: "15px 150px"}}>
                <Card style = {{position: "relative", borderRadius: "10px", height: "160"}}>
                    <CardMedia
                        style = {{position: "absolute"}}
                        component="img"
                        height="160"
                        image="https://gstatic.com/classroom/themes/img_graduation.jpg"
                        alt="class background"
                    />
                    <CardContent style = {{position: "relative", height: "160px"}}>
                      <Typography gutterBottom variant = "h4" component = "div" color = "white" fontWeight={500}>
                          Project Based Learning
                      </Typography>
                      <Typography variant = "body2" color = "white" fontWeight={500}>
                          Manish Rana
                      </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box width = "100%" minHeight="100%" sx={{alignSelf: "center", padding: "0px 150px"}} className="my-auto">
              <Stack
                direction = "column"
                justifyContent = "center"
                alignItems = "flex-start"
                spacing = {2}
                onClick = {() => {setCreateAssignmentDialog(true)}}
            >
              {
                classroomData[0]["assignments"].map(({assignmentName, assignmentDate}) => {
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
                          <AssignmentIcon />
                          </Avatar>
                          <div>
                          <Typography gutterBottom variant = "h6" component = "div">
                              {assignmentName}
                          </Typography>
                          <Typography variant = "caption" component = "div">
                              Posted: {assignmentDate}
                          </Typography>
                          </div>
                      </Stack>
                  </Box>
                  )
                })                            
              }
              </Stack>
            </Box>
          </>
          :
          <Box minHeight="100%" sx={{alignSelf: "center"}} className="my-auto">
            <Stack direction="column">
              <Typography variant='h5' gutterBottom>This project is not an Academic Project Yet!</Typography>
              <Typography variant='h5' gutterBottom>You have not joined any class yet!</Typography>
              <Typography variant='body2' gutterBottom>Click here to join one by entering the class code and coneverting this into an academic project</Typography>
              <TextField
                autoFocus
                margin="dense"
                label="Class Code"
                type="text"
                sx={{marginBottom: "10px"}}
                value={joinedClass}
                onChange={(e) => setJoinedClass(e.target.value)}
              />
              <Button variant = "contained" color="primary">
                Join
              </Button>
            </Stack>
          </Box>
        }
    </div>
  )
}

export default Submissions