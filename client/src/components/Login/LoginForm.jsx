import React, { useState } from 'react'

import { Button, TextField } from '@mui/material'

import Logo_Big from '../../assets/images/Logo_Big.png'

import './LoginForm.css'

const LoginForm = () => {

    const [message, setMessage] = useState(null);
    
    const handleLogin = (event) => {

    }

    return (

        <div className="login">
            <div className="left">
                <img src={Logo_Big} alt="" />
            </div>
            <div className="right">
                <form onSubmit = {handleLogin}>

                    <h3>Projectory Student Registration</h3>

                    <div className="formGroup full">
                        <h4>Email Address</h4>
                        <TextField
                            id="outlined-basic"
                            label="Enter your email address"
                            variant="outlined"
                            size="small"
                            type="email"
                            placeholder='Enter your college registered email address'
                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                        />
                        <span className = "text-muted">Please enter your college registered email address only*</span>
                    </div>

                    <div className="formGroup full">
                        <h4>Password</h4>
                        <TextField
                            id="outlined-basic"
                            label="Enter your password"
                            variant="outlined"
                            size="small"
                            type="password"
                            placeholder='Enter the One Time Password'
                            style={{ width: "100%", color: "var(--black)", fontWeight: "bold", fontSize: "14px", fontFamily: "Poppins" }}
                        />
                    </div>

                    <div className="formGroup formBtns">
                        <Button 
                            variant = "contained" 
                            width = "100%"
                            style={{ textTransform: "capitalize", gap: "1rem", backgroundColor: 'rgb(20, 38, 131)' }} 
                            type = "submit"
                        >
                            Register
                        </Button>
                    </div>

                </form>
            </div>
        </div>

        
    )
}

export default LoginForm