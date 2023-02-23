import React from 'react'

import { Button, IconButton } from '@mui/material'

import './BoardBanner.css'

const BoardBanner = ({props}) => { 

    return (
        <div className="boardBanner">
            <div className="left">
                <div className = "boardIcon">
                    <IconButton>
                        <props.icon style = {{ fontSize: "48px"  }}/>
                    </IconButton>
                </div>
            </div>
            <div className="right">
                <h3>{props.name}</h3>
                <p style = {{ fontSize: "13px" }} >4 followers</p>
                <Button 
                    variant='contained'
                    style = {{ 
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        textTransform: 'capitalize',
                        borderRadius: '25px',
                        width: 'max-content'
                    }}
                    >
                        Follow
                </Button>
            </div>
        </div>
    )

}

export default BoardBanner