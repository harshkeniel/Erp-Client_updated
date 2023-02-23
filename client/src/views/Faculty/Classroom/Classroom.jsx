import React, { useState } from 'react'
import { Grid, InputBase, Button } from '@mui/material'
import SearchLogo from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

import ClassroomCard from '../../../components/ClassroomContent/ClassroomCard'

import initialClassroomData from '../../../data/classroomData'

import CreateClass from "../../../components/ClassroomContent/CreateClass";

import "./Classroom.css"

  const Classroom = () => {

    const [createClassDialog, setCreateClassDialog] = useState(false);
    const [classroomData, setClassroomData] = useState(initialClassroomData);

    const ButtonStyle = {
      textTransform: "capitalize",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: "bold",
    }

    const Search = styled("div")(({ theme }) => ({
      position: "relative",
      borderRadius: "15px",
      backgroundColor: "#fff",
      width: "30%",
      fontFamily: "Poppins",
      [theme.breakpoints.up("sm")]: {
        width: "30%",
      },
      padding: "0 1rem",
    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      fontWeight: "bold",
      color: "var(--black)",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "20ch",
        },
      },
    }));

  return (
    <div className = 'classroomBodyContent'>
      <div className = 'classroomBody'>
        <CreateClass 
        createClassDialog = {createClassDialog} 
        setCreateClassDialog = {setCreateClassDialog} 
        classroomData = {classroomData}
        setClassroomData = {setClassroomData} 
        />
        <div
            className="searchClass"
            style={{ display: "flex", justifyContent: "space-between", padding: "inherit" }}
        >
            <Search>
            <SearchIconWrapper>
                <SearchLogo />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
            />
            </Search>
            <Button variant="contained" color="primary" style = {ButtonStyle} onClick = {() => {setCreateClassDialog(true)}}>
              Create Class
            </Button>
        </div>
        <Grid container spacing = {{ xs: 2, md: 3 }}>
          {
            classroomData.map(({code, className, facultyName, facultyImg, classroomImg, assignments}) => {
              return (
                <Grid item style = {{display: 'flex'}}>
                  <ClassroomCard 
                    code = { code }
                    className = {className}
                    facultyName = {facultyName}
                    facultyImg = {facultyImg}
                    classroomImg = {classroomImg}
                    initialAssignmentData = {assignments}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </div>
  )
}

export default Classroom