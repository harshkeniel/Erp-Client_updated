import React from "react";
import { Link } from "react-router-dom";

import { Tab, Box, InputBase, Button } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import SearchLogo from "@mui/icons-material/Search";
import { Assignment, Person, Publish, VerifiedUser } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import ProjectContainer from "../../../components/ProjectContainer/ProjectContainer";

import "./Project.css";

const Project = () => {

  const [value, setValue] = React.useState("1");

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
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <div className="project">

      {/* Project Body Content */}
      <div className="projectBodyContent">
        <div className="projectBody">
          {/* Public, Private and Submitted Projects */}
          <div className="projects">
            <div className="countCardContainer">
              <div
                className="countCard"
                style={{ borderLeft: "8px solid lightcoral",
                          background: "rgb(226 204 204)" }}
              >
                <div className="left">
                  <h2>102</h2>
                  <p>Total Projects</p>
                </div>
                <div className="right">
                  <Assignment style={{ fontSize: "60px" }} />
                </div>
              </div>

              <div
                className="countCard"
                style={{ borderLeft: "8px solid blue",
                          background: "#8787dd" }}
              >
                <div className="left">
                  <h2>43</h2>
                  <p>Personal Projects</p>
                </div>
                <div className="right">
                  <Person style={{ fontSize: "60px" }} />
                </div>
              </div>

              <div
                className="countCard"
                style={{ borderLeft: "8px solid green",
                          background: "rgb(167 167 167)" }}
              >
                <div className="left">
                  <h2>22</h2>
                  <p>Published Projects</p>
                </div>
                <div className="right">
                  <Publish style={{ fontSize: "60px" }} />
                </div>
              </div>

              <div
                className="countCard"
                style={{ borderLeft: "8px solid var(--yellow)",
                          background: "#e9ba70" }}
              >
                <div className="left">
                  <h2>14</h2>
                  <p>Private Projects</p>
                </div>
                <div className="right">
                  <VerifiedUser style={{ fontSize: "60px" }} />
                </div>
              </div>
            </div>

            {/* Tab Layout Container */}
            <TabContext value={value}>
              {/* Tab Layout Columns */}
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="">
                  <Tab
                    label="Personal Projects"
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
                    label="Mentored Projects"
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

              <div
                className="searchProject"
                style={{ display: "flex", justifyContent: "space-between" }}
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
                  style={{
                    padding: "0 1rem",
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    width: "300px",
                    fontWeight: "bold",
                  }}
                >
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    to="/student/projects/new-project"
                  >
                    Create New Project
                  </Link>
                </Button>
              </div>

              {/* Tab Panel for Your Projects */}
              <TabPanel value="1">
                <div className="publicProjects">
                  <div className="publicProjectHeading">
                    <div className="halfHr"></div>
                    <div className="tag">
                      <h5>Personal Projects</h5>
                    </div>
                    <div className="halfHr"></div>
                  </div>
                  <ProjectContainer />
                </div>
              </TabPanel>

              {/* Tab Panel for Mentored Projects */}
              <TabPanel value="2">
                <div className="publicProjects">
                  <div className="publicProjectHeading">
                    <div className="halfHr"></div>
                    <div className="tag">
                      <h5>Mentored Projects</h5>
                    </div>
                    <div className="halfHr"></div>
                  </div>
                  <ProjectContainer />
                </div>
              </TabPanel>
            </TabContext>
          </div>

          {/* Idea Recommendation Module */}
          <div className="newIdeaSection"></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
