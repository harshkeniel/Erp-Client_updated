import { Box, Stack, Button, Chip, Divider, TextField, Typography, InputLabel, Input, IconButton, InputAdornment} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import GitHubIcon from '@mui/icons-material/GitHub';

import TopDiv from './TopDiv'

import "./Plagiarism.css"

const data = {
    name : "Title 1",
    idea_description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero tempora suscipit, culpa itaque ut voluptatum sint quos voluptate possimus consectetur, nobis minus perspiciatis a, ullam recusandae doloremque earum sit officia.",
    tech_stack: ["React", "NodeJs", "SQL"],
    tags: ["Data Visualization", "Image Processing", "Machine Learning"]
}

function Plagiarism() {

    const [assignmentMaterials, setAssignmentMaterials] = useState("");
    const [githubLink1, setGithubLink1] = useState();
    const [githubLink2, setGithubLink2] = useState();

  return (
    <div className='plagiarismBody'>
        <Typography variant="h4">Plagiarism Check for : Project Text Data</Typography>
        <Stack direction="row" spacing={2}>
            <TopDiv {...data}/>
            <Divider orientation="vertical" flexItem color="black"/>
            <TopDiv {...data}/>
        </Stack>
        <Stack direction="row" sx={{justifyContent: "space-between"}}>
            <Button size="small" variant='contained'>Calculate Similarity Score</Button>
            <TextField 
            label="Similarity Score"
            id="assignmentMarks"
            color='success'
            margin="dense"
            size="small"
            disabled
            />
        </Stack>
        <Divider sx={{margin: "30px"}} flexItem color="black"/>

        <Typography variant="h4">Plagiarism Check for : Project Documents</Typography>
        <Stack direction="row" spacing={2} sx={{width: "100%"}}>
            <Box padding={"10px 20px"} sx={{width : "100%"}}>
                <Typography variant='h5' sx={{paddingTop: "inherit", paddingBottom: "inherit"}} gutterBottom>
                    Documents: 
                </Typography>
                <Chip 
                    label="material-1.pdf" 
                    variant="outlined" 
                    component = {Link} 
                    to = "/material.pdf" 
                    color = "secondary" clickable
                />
            </Box>
            <Divider orientation="vertical" flexItem color="black"/>
            <Box padding={"10px 20px"} sx={{width : "100%"}}>
                <Typography variant='body2' sx={{paddingTop: "inherit", paddingBottom: "inherit"}} gutterBottom>
                    Documents: 
                </Typography>
                <InputLabel color="primary" style={{marginTop : "8px"}} htmlFor="assignmentMaterial">
                <Input
                    type="file"
                    id="assignmentMaterial"
                    style = {{display: "none"}}
                    inputProps = {{multiple: true}}
                    onChange={(e) => setAssignmentMaterials(e.target.files)}
                />
                    Upload Materials
                    <IconButton  color="primary" aria-label="upload materials" component="span">
                    <FileUploadIcon />
                    </IconButton>
                </InputLabel>
                {
                    assignmentMaterials && 
                    Object.entries(assignmentMaterials).map(([key, value]) => {
                    return (
                        <Chip label={value.name} variant="outlined" color = "secondary" />
                    )
                    })
                }
            </Box>
        </Stack>

        <Stack direction="row" sx={{justifyContent: "space-between"}}>
            <Button size="small" variant='contained'>Calculate</Button>
            <TextField 
            label="Result"
            id="similarityScore"
            color='success'
            margin="dense"
            size="small"
            disabled
            />
        </Stack>
        
        <Divider sx={{margin: "30px"}} flexItem color="black"/>

        <Typography variant="h4">Plagiarism Check for : Project Github Repo</Typography>
        <Stack direction="row" spacing={2} sx={{width: "100%"}}>
            <Box padding={"10px 20px"} sx={{width : "100%"}}>
            <TextField
                id="GithubLink1"
                label="Github Link 1"
                color='success'
                margin="dense"
                value={githubLink1}
                onChange={(e) => setGithubLink1(e.target.value)}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><GitHubIcon /></InputAdornment>,
                }}
            />
            </Box>
            <Divider orientation="vertical" flexItem color="black"/>
            <Box padding={"10px 20px"} sx={{width : "100%"}}>
            <TextField
                id="GithubLink2"
                label="Github Link 2"
                color='success'
                margin="dense"
                value={githubLink2}
                onChange={(e) => setGithubLink2(e.target.value)}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><GitHubIcon /></InputAdornment>,
                }}
            />
            </Box>
        </Stack>

        <Stack direction="row" sx={{justifyContent: "space-between"}}>
            <Button size="small" variant='contained'>Calculate Similarity Score</Button>
            <TextField 
            label="Similarity Score"
            id="assignmentMarks"
            color='success'
            margin="dense"
            size="small"
            disabled
            />
        </Stack>
        
    </div>
  )
}

export default Plagiarism