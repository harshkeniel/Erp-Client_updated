import React from 'react'
import { Box, Button, Card, CardActions, CardMedia, CardActionArea, Grid, Tab, CardContent, Typography } from '@mui/material'
import { TabPanel, TabContext, TabList } from "@mui/lab"
import { Link } from 'react-router-dom'
import projectMedia1 from "../../../../assets/images/projectMedia1.png"
import projectMedia2 from "../../../../assets/images/projectMedia2.png"
import projectMedia3 from "../../../../assets/images/projectMedia3.jpeg"

import docFileIcon from "../../../../assets/images/fileImages/doc.png"
import htmlFileIcon from "../../../../assets/images/fileImages/html.png"
import jsFileIcon from "../../../../assets/images/fileImages/js.png"
import mp3FileIcon from "../../../../assets/images/fileImages/mp3.png"
import pdfFileIcon from "../../../../assets/images/fileImages/pdf.png"
import pptFileIcon from "../../../../assets/images/fileImages/ppt.png"
import txtFileIcon from "../../../../assets/images/fileImages/txt.png"
import xlsFileIcon from "../../../../assets/images/fileImages/xls.png"
import zipFileIcon from "../../../../assets/images/fileImages/zip.png"
import noFileIcon from "../../../../assets/images/fileImages/nofile.png"


const MediaAndDocs = () => {

  const media = [
    {
      imgPath: projectMedia1,
      component: "img"
    },
    {
      imgPath: projectMedia2,
      component: "img"
    },
    {
      imgPath: projectMedia3,
      component: "img"
    },
    {
      imgPath: 'https://www.youtube.com/embed/hYv6BM2fWd8',
      component: 'iframe'
    },
    {
      imgPath: 'https://www.youtube.com/embed/dgKSqz3it50',
      component: 'iframe'
    },
    {
      imgPath: 'https://www.youtube.com/embed/pEfrdAtAmqk',
      component: 'iframe'
    },
  ];

  const docs = [
    {
      filePath: "material1.pdf"
    },
    {
      filePath: "material2.doc"
    },
    {
      filePath: "material3.js"
    },
    {
      filePath: "material5.mp3"
    },
    {
      filePath: "material6.ppt"
    },
    {
      filePath: "material7.zip"
    },
    {
      filePath: "material8.jsx"
    },
  ];

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="card">
      <TabContext value={value}>
        {/* Tab Layout Columns */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="">
            <Tab
              label="Media"
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
              label="Docs"
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
          <Grid container spacing = {{ xs: 2, md: 3 }}>
            {
              media.map(({imgPath, component}) => {
                return (
                  <Grid item style = {{display: 'flex'}}>
                    <Card sx={{ width: 280, margin: 'auto' }}>
                      <CardActionArea>
                        <CardMedia
                          component={component}
                          height="180"
                          image={imgPath}
                          alt="Project Media"
                          sx={{objectFit: "cover", width: '100%'}}
                        />
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="error" variant='contained' style = {{
                          textTransform : "capitalize",
                          fontFamily : "Poppins",
                          padding : "0.25rem 0",
                          marginLeft : "auto"
                        }}>
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
                })
            }
          </Grid>
        </TabPanel>
        <TabPanel value = "2">
          <Grid container spacing = {{ xs: 2, md: 3 }}>
            {
              docs.map(({filePath}) => {
                let ext = filePath.split('.').pop();
                let icon = noFileIcon;
                if (ext==="doc"){
                  icon = docFileIcon;
                }
                else if(ext==="html"){
                  icon = htmlFileIcon;
                }
                else if(ext==="js"){
                  icon = jsFileIcon;
                }
                else if(ext==="mp3"){
                  icon = mp3FileIcon;
                }
                else if(ext==="pdf"){
                  icon = pdfFileIcon;
                }
                else if(ext==="ppt"){
                  icon = pptFileIcon;
                }
                else if(ext==="txt"){
                  icon = txtFileIcon;
                }
                else if(ext==="zip"){
                  icon = zipFileIcon;
                }
                else if(ext==="xlx"){
                  icon = xlsFileIcon;
                }
                return (
                  <Grid item style = {{display: 'flex'}}>
                    <Card sx={{ width: 200, margin: 'auto' }}>
                      <CardActionArea component={Link} to={`./${filePath}`} sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <CardMedia
                          component="img"
                          height="180"
                          image={icon}
                          alt="Project Media"
                          sx={{objectFit: "cover", width: '50%', height: '50%'}}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {filePath}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
                })
            }
          </Grid>
        </TabPanel>
      </TabContext>
    </div>
  )
}

export default MediaAndDocs