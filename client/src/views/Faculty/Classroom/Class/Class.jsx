import React, {useState} from 'react'
import { Tab, Box, InputBase, IconButton, Button, Stack, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import SearchLogo from "@mui/icons-material/Search";
import BackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from 'react-router-dom';

import "./Class.css"

import AssignmentCard from '../../../../components/ClassroomContent/AssignmentPostCard';
import CreateAssignment from '../../../../components/ClassroomContent/CreateAssignment';

function Class() {
    const [assignmentTitle, setAssignmentTitle] = useState("");
    const [assignmentDescription, setAssignmentDescription] = useState("");
    const [assignmentDue, setAssignmentDue] = useState(null);
    const [assignmentMaterials, setAssignmentMaterials] = useState({});

    const [value, setValue] = React.useState("1");
    const [createAssignmentDialog, setCreateAssignmentDialog] = useState(false);
    
    const location = useLocation()
    const { className, facultyName, classroomImg, initialAssignmentData } = location.state
    const [assignmentData, setAssignmentData] = useState(initialAssignmentData);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

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
        <div className = 'classBodyContent'>
          <div className = 'classBody'>
            <CreateAssignment 
            createAssignmentDialog = {createAssignmentDialog} 
            setCreateAssignmentDialog = {setCreateAssignmentDialog} 
            assignmentTitle = {assignmentTitle}
            setAssignmentTitle = {setAssignmentTitle}
            assignmentDescription = {assignmentDescription}
            setAssignmentDescription = {setAssignmentDescription}
            assignmentDue = {assignmentDue}
            setAssignmentDue = {setAssignmentDue}
            assignmentMaterials = {assignmentMaterials}
            setAssignmentMaterials = {setAssignmentMaterials}
            setAssignmentData = {setAssignmentData}
            />
              <Stack direction = "row">
                  <IconButton aria-label="back" component = {Link} to = "/faculty/classroom">
                    <BackIcon />
                  </IconButton>
                <div
                    className="searchClass"
                    style={{ display: "flex", justifyContent: "space-between", width: "-webkit-fill-available" }}
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
                    <Button
                    variant="contained"
                    color="primary"
                    onClick = {() => {setCreateAssignmentDialog(true)}}
                    style={{
                        padding: "0 1rem",
                        textTransform: "capitalize",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        width: "300px",
                        fontWeight: "bold",
                    }}
                    >
                      Create New Assignment
                    </Button>
                </div>
              </Stack>
              {/* Tab Layout Container */}
              <TabContext value={value}>
                {/* Tab Layout Columns */}
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList onChange={handleChange} aria-label="">
                    <Tab
                      label="Assignments"
                      value="1"
                      style={{
                        textTransform: "capitalize",
                        color: "var(--black",
                        fontWeight: "bold",
                        fontSize: "14px",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Tab
                      label="Teams"
                      value="2"
                      style={{
                        textTransform: "capitalize",
                        color: "var(--black",
                        fontWeight: "bold",
                        fontSize: "14px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </TabList>
                </Box>

                <TabPanel value = "1">
                  <div className = "Assignments">
                    <Box width = "100%" style = {{paddingBottom: "15px"}}>
                        <Card style = {{position: "relative", borderRadius: "10px", height: "160"}}>
                            <CardMedia
                                style = {{position: "absolute"}}
                                component="img"
                                height="160"
                                image={classroomImg}
                                alt="class background"
                            />
                            <CardContent style = {{position: "relative", height: "160px"}}>
                              <Typography gutterBottom variant = "h4" component = "div" color = "white" fontWeight={500}>
                                  {className}
                              </Typography>
                              <Typography variant = "body2" color = "white" fontWeight={500}>
                                  {facultyName}
                              </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Stack
                        direction = "column"
                        justifyContent = "center"
                        alignItems = "flex-start"
                        spacing = {2}
                        component = {Link} 
                        to = "/faculty/classroom/class/assignment"
                    >
                      {
                        assignmentData ?
                        assignmentData.map(({assignmentTitle, assignmentDue}) => {
                          return (
                            <AssignmentCard 
                              assignmentTitle = {assignmentTitle}
                              assignmentDue = {assignmentDue}
                              noAssignments = {false}
                            />  
                          )
                        })
                        :
                        <AssignmentCard 
                          assignmentName = "You have not created any assignments yet!"
                          assignmentDate = "-"
                          noAssignments = {true} 
                        />                            
                      }
                    </Stack>
                  </div>
                </TabPanel>

                <TabPanel value="2">
                  <div className="Teams">
                      Teams
                  </div>
                </TabPanel>
              </TabContext>
          </div>
        </div>
    )
}

export default Class