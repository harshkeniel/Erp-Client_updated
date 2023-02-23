import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'



import Student from "./views/Student/Student";
import Home from "./views/Student/Home/Home";
import Project from "./views/Student/Projects/Project";
import Community from "./views/Student/Community/Community";
import Chat from "./views/Student/Chat/Chat";
import Private from "./views/Student/Profile/Private/Private";
import Public from "./views/Student/Profile/Public/Public";
import PostPage from "./views/Student/PostPage/PostPage";
import DiscussionPage from "./views/Student/DiscussionPage/DiscussionPage";
import NewProject from "./views/Student/NewProject/NewProject";

import ProjectPanel from "./views/ProjectPanel/ProjectPanel";
// import Plagiarism from "./views/PlagiarismDemo/Plagiarism";

import CollegeAdmin from "./views/College/CollegeAdmin/CollegeAdmin";
import AdminHomeContent from "./views/College/CollegeAdmin/AdminHomeContent/AdminHomeContent";
import AdminAnalytics from "./views/College/CollegeAdmin/AdminAnalytics/AdminAnalytics"
import AdminUploads from "./views/College/CollegeAdmin/AdminUploads/AdminUploads"

import "./App.css"
import Industry from "./views/Industry/Industry";
import IndustryHomeContent from "./views/Industry/IndustryHomeContent/IndustryHomeContent";
import IndustryListingContent from "./views/Industry/IndustryListingContent/IndustryListingContent";

import Faculty from "./views/Faculty/Faculty";
import Classroom from './views/Faculty/Classroom/Classroom';
import Class from './views/Faculty/Classroom/Class/Class';
import Assignment from './views/Faculty/Classroom/Assignment/Assignment';
import SingleIndustryListing from './components/JobListing/SingleIndustryListing/SingleIndustryListing';
import LoginForm from './components/Login/LoginForm';

const App = () => {
  return (
    
  <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            
            {/* Student Interface Routes */}
            <Route path = "/student" element = {<Student Tab = {Home} />} />
            <Route path = "/student/projects" element = {<Student Tab = {Project} />} />
            <Route path = "/student/community" element = {<Student Tab = {Community} />} />
            <Route path = "/student/chats" element = {<Student Tab = {Chat} />} />
            <Route path = "/student/profile/edit" element = {<Student Tab = {Private} />} />
            <Route path = "/student/portfolio" element = {<Public/>} />
            <Route path = "/student/posts/postOne" element = {<Student Tab = {PostPage} />} />
            <Route path = "/student/community/discussionOne" element = {<Student Tab = {DiscussionPage} />} />
            <Route path = "/student/projects/new-project" element = {<Student Tab = {NewProject} />} />
            <Route path = "/student/project-panel/projectId" element={<ProjectPanel />} />

            {/* College Admin Routes */}
            <Route path = "/college-admin" element={<CollegeAdmin Tab = {AdminHomeContent} />} />
            <Route path = '/college-admin/analytics' element={<CollegeAdmin Tab = {AdminAnalytics} />} />
            <Route path = '/college-admin/uploads' element={<CollegeAdmin Tab = {AdminUploads} />} />

            {/* Faculty Routes */}
            <Route path = "/faculty" element = {<Faculty Tab = {Home} />} />
            <Route path = "/faculty/projects" element = {<Faculty Tab = {Project} />} />
            <Route path = "/faculty/community" element = {<Faculty Tab = {Community} />} />
            <Route path = "/faculty/chats" element = {<Faculty Tab = {Chat} />} />
            <Route path = "/faculty/posts/postOne" element = {<Faculty Tab = {PostPage} />} />
            <Route path = "/faculty/projects/newProject" element = {<Faculty Tab = {NewProject} />} />
            <Route path = "/faculty/classroom" element = {<Faculty Tab = {Classroom} />} />
            <Route path = "/faculty/classroom/class" element = {<Faculty Tab = {Class} />} />
            <Route path = "/faculty/classroom/class/assignment" element = {<Faculty Tab = {Assignment} />} />

            {/* Industry Routes */}
            <Route path = "/industry" element={<Industry Tab = {IndustryHomeContent}/>} />
            <Route path = "/industry/listings" element={<Industry Tab = {IndustryListingContent}/>} />
            <Route path = "/industry/listings/single-listing" element={<Industry Tab = {SingleIndustryListing}/>} />

            {/* Login */}
            <Route path = '/login' element = {<LoginForm />} />

          </Routes>
        </BrowserRouter>
      </div>
    </LocalizationProvider>
  );  
};

export default App;
