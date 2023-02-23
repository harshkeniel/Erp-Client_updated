// Importing other Requirements
import React, { useState } from "react";
import "./OTP.css";

// Importing Material UI Logos
import LogoIcon from "@mui/icons-material/AcUnit";
import PhoneIcon from "@mui/icons-material/Phone";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/SendToMobile";
import LockIcon from "@mui/icons-material/Lock";

// Function to Render OTP Component
const OTP  =  ()  => {

  const [IsOtpSent, setIsOtpSent]  =  useState(false);
  const [otp, setOtp]  =  useState(new Array(4).fill(""));
  const [mobile, setMobile] = useState("");

  // Function to handle the OTP number change
  const handleChange  =  (element, index)  => {
  
    if (element.value  ===  isNaN) return false;
    setOtp([...otp.map((d, idx)  => (idx  ===  index ? element.value : d))]);

    if (element.nextSibiling) {
      element.nextSibiling.focus();
    }
  };

  // OTP UI
  return (
    <div className = "container">

      {/* Title and Emoji */}
      <div className = "title">
        <LogoIcon />
        <h2>HexaByte</h2>
      </div>

      {/* Main Content */}
      <div className = "mainContent">

        {/* UI Before Sending the OTP */}
        {!IsOtpSent && (
          <>
            <div className = "card">
              
              <div className = "cardTitle">
                <PhoneIcon style = {{ color: "orange" }} />
                <h3>Enter your phone number</h3>
              </div>

              <div className = "inputSet">
                <input
                  className = "inputNo"
                  type = "phone"
                  name = "phoneNo"
                  placeholder = "XXX-XXX-XXXX"
                  value = {mobile}
                  onChange = {(event) => setMobile(event.target.value)}
                  required
                />
              </div>

              <Button
                variant = "contained"
                onClick = {() => {
                  setIsOtpSent(true);
                }}
              >
                <span>Send OTP</span>
                <SendIcon />
              </Button>

              <p className = "TandC">
                By entering your phone number, you're agreeing to our Terms of
                Service and Privacy Policy
              </p>
            </div>
          </>
        )}

        {/* UI After Sending the OTP */}
        {IsOtpSent && (
          <>
            <div className = "card">

              <div className = "cardTitle">
                <LockIcon style = {{ color: "yellow" }} />
                <h3>Enter the code we just texted you</h3>
              </div>

              <div className = "inputSet">
              
                {otp.map((data, index)  => {
                  return (
                    <>
                      <input
                        type = "text"
                        placeholder = "X"
                        className = "otpField"
                        name = "otp"
                        maxLength = "1"
                        key = {index}
                        value = {data}
                        onChange = {(e)  => handleChange(e.target, index)}
                        onFocus = {(e)  => e.target.select()}
                      />
                      { index < 3 && <span className = "otpSeparator">-</span> }
                    </>
                  );
                })}

              </div>

              <Button variant = "contained" >
                <span>Verify OTP</span>
                <SendIcon />
              </Button>

              <p className = "TandC">
                Didn't Receive ?
                <span>
                  <a href = {{}}>Resend OTP</a>
                </span>
              </p>

            </div>
          </>
        )}
      </div>

    </div>
  )
};

export default OTP;