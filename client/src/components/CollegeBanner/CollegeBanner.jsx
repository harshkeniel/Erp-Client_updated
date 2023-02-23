import React, { useState, useRef } from 'react'

import { Edit } from '@mui/icons-material';
import { IconButton, Button } from '@mui/material';

import CoverPhoto from '../../assets/images/collegeBanner.jpg'
import ProfilePhoto from '../../assets/images/collegeLogo.png';

import './CollegeBanner.css'

const CollegeBanner = ({ editable=false}) => {

    const [showPopup, setShowPopup] = useState(false)

    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };

    return (
        <>
        
        <div className="bannerCollege">
            <div className="collegeBanner">
                <div className = "profileImages" style = {{ alignItems: "flex-start", position: "relative"}} >
                    <img src = { CoverPhoto } alt = ""  style = {{ height: "150px" }} />
                    <img src = { ProfilePhoto } alt = ""  style={{ borderRadius: "5px", marginLeft: "2rem" }} />

                    <div className = "boardIcon" style = {{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "var(--cardColor)"
                        }}
                    >
                        {
                            editable && 
                            <IconButton onClick={() => setShowPopup(true)}>
                                <Edit style = {{ fontSize: "24px"  }}/>
                            </IconButton>
                        }
                        
                    </div>

                    <div className = "boardIcon" style = {{
                        position: "absolute",
                        top: "5rem",
                        left: "1rem",
                        background: "var(--cardColor)"
                        }}
                    >
                        {
                            editable && 
                            <IconButton onClick={() => setShowPopup(true)}>
                                <Edit style = {{ fontSize: "24px"  }}/>
                            </IconButton>
                        }
                    </div>

                </div>

                <div className = "profileName" style = {{ alignItems: "flex-start", padding: "1rem", marginTop: "2rem"  }} >
                    <span className = "title">Thakur College of Engineering and Technology</span>
                </div>
            </div>
        </div>

        <div className={`modalDiv ${showPopup ? "show" : ""}`}>
            <div className={`modalComponent ${showPopup ? "show" : ""}`}>
                <form action="">
                    <h3>Cover Photo</h3>

                    <div className="previewImage profileImages">
                        { image && <img src = { image.image } alt = ""  style = {{ height: "150px" }} />}
                        { !image && <img src = { CoverPhoto } alt = ""  style = {{ height: "150px" }} /> }
                    </div>

                    <div className="formGroup formBtns" style = {{ justifyContent: "space-between" }}>
                        <div className="left">
                            <Button 
                                variant = "contained" 
                                color = "error" 
                                onClick = {() => setShowPopup(false)}
                                style={{ textTransform: "capitalize", gap: "1rem" }}
                            >
                                Close
                            </Button>
                        </div>
                        <div className="right" style = {{ display: "flex", gap: "1rem" }} >
                            <Button 
                                variant = "contained" 
                                color = "primary" 
                                style={{ textTransform: "capitalize", gap: "1rem" }}
                                onClick={()=>imageRef.current.click()}
                            >
                                Change Photo
                            </Button>
                            <Button 
                                variant = "contained" 
                                onClick={()=>setShowPopup(false)}
                                style={{ textTransform: "capitalize", gap: "1rem", backgroundColor: 'rgb(20, 38, 131)' }} 
                            >
                                Save
                            </Button>
                            <div style={{ display: "none" }}>
                                <input
                                    type="file"
                                    name="myImage"
                                    ref={imageRef}
                                    onChange={onImageChange}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div> 

        </>
    )
}

export default CollegeBanner