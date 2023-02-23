import React, { useState } from "react";

import { IconButton, TextField, Button } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

import './NewProject.css'

const NewProject = () => {

    const [showProject, setShowProject] = useState(false);

    return (

        <div className="newProjectContent">
        
            <div className="newProjectSection">
        
                {/* New Project Information */}
                <div className="newProjectInfo">
                    <h1>Share what you built</h1>
                    <p>
                    Give your weekend projects, side projects, hobby projects, serious
                    ventures a place to breathe, invite collaborators and inspire
                    other builders.
                    </p>
                </div>

                {/* New Project Additional Content */}
                <div class="newProject">
                    {/* Both UI Container */}
                    <div className="addNewProject">
                    {/* Add Project UI */}
                    <div
                        className={`addProjectContainer ${!showProject ? "show" : ""}`}
                    >
                        <div className="addProjectSubContainer">
                        <div className="projectIcons">
                            <IconButton onClick={() => setShowProject(true)}>
                            <AddCircle style={{ fontSize: "70px", color: "blue" }} />
                            </IconButton>
                        </div>
                        </div>
                    </div>

                        {/* Start with Project Title UI */}
                        <div className={`beginProject ${showProject ? "show" : ""}`}>
                            <h1>Let's begin your Project Journey</h1>
                            <TextField
                                id="outlined-basic"
                                label="Enter Title"
                                placeholder="What are you calling your project ?"
                                variant="outlined"
                                size="small"
                                style={{
                                    width: "100%",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            />
                            <div className="itemOneBtns">
                                <a href = '/student/project-panel/projectId'>
                                    <Button
                                        style={{
                                        textTransform: "capitalize",
                                        width: "150px",
                                        padding: "0.5rem",
                                        }}
                                        variant="contained"
                                        color="primary"
                                    >
                                        Begin
                                    </Button>
                                </a>
                                <Button
                                    style={{
                                    textTransform: "capitalize",
                                    width: "150px",
                                    padding: "0.5rem",
                                    }}
                                    variant="contained"
                                    color="error"
                                    onClick={() => setShowProject(false)}
                                >
                                    Later
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProject