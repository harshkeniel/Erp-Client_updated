import React from 'react'
import { Box, Chip, Divider, Grid, Typography, MenuItem, Select, InputLabel, FormControl  } from '@mui/material'
import { useState } from 'react';

function TopDiv({name, idea_description, tech_stack, tags}) {

    const [projectDropdown, setProjectDropdown] = useState("");

  return (
    <Box padding={"10px 20px"} sx={{marginBottom: "10px"}}>
        <FormControl fullWidth>
            <InputLabel id="ProjectDropdownLabel">Select Project</InputLabel>
            <Select
                label="Select Project"
                labelId="ProjectDropdownLabel"
                id="ProjectDropdown"
                value={projectDropdown}
                onChange={(e) => setProjectDropdown(e.target.value)}
            >
                <MenuItem value="Project 1">Project 1</MenuItem>
                <MenuItem value="Project 2">Project 2</MenuItem>
                <MenuItem value="Project 3">Project 3</MenuItem>
            </Select>
        </FormControl>
        <Typography variant='h5' gutterBottom>{name}</Typography>
        <Typography variant='body2' gutterBottom>{idea_description}</Typography>
        <Divider sx={{paddingBottom: "inherit"}} />
        <Typography variant='h5' sx={{paddingTop: "inherit", paddingBottom: "inherit"}} gutterBottom>
            Tech Stack: 
        </Typography>
        <Grid container spacing={"10"} >
            {
                tech_stack.map((item) => {
                    return (
                        <Grid item style = {{display: 'flex'}}>
                            <Chip 
                                label={item} 
                                variant="outlined" 
                                color = "primary"
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
        <Typography variant='h5' sx={{paddingTop: "inherit", paddingBottom: "inherit"}} gutterBottom>
            Tags: 
        </Typography>
        <Grid container spacing={"10"} >
            {
                tags.map((item) => {
                    return (
                        <Grid item style = {{display: 'flex'}}>
                            <Chip 
                                label={item} 
                                variant="outlined" 
                                color = "primary"
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    </Box>
  )
}

export default TopDiv