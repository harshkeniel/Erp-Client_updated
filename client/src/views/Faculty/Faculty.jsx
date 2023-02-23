import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./Faculty.css"

import tabsInfo from '../../data/FacultyTabsInfo'

const Faculty = ({Tab}) => {
  const THEME = createTheme({
    typography: {
     "fontFamily": `"Poppins", sans-serif`,
    }
  });

  return (

    <ThemeProvider theme={THEME}>
      <div className="faculty">
          <Navbar tabsInfo = {tabsInfo}/>
          <Tab />
      </div>
    </ThemeProvider>
  )
}

export default Faculty
