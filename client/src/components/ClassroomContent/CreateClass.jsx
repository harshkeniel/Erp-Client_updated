import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Slide, 
    Snackbar} from "@mui/material";
  import React, { useState } from "react";
  import { nanoid } from "nanoid";

  import facultyImg from '../../assets/images/siddheshProfilePhoto.png'

  import classroomImg1 from "../../assets/images/classroomImg1.jpg"
  import classroomImg2 from "../../assets/images/classroomImg2.jpg"
  import classroomImg3 from "../../assets/images/classroomImg3.jpg"
  import classroomImg4 from "../../assets/images/classroomImg4.jpg"
  import classroomImg5 from "../../assets/images/classroomImg5.jpg"
  import classroomImg6 from "../../assets/images/classroomImg6.jpg"

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  function CreateClass({createClassDialog, setCreateClassDialog, classroomData, setClassroomData}) {
    const classroomImages = [classroomImg1, classroomImg2, classroomImg3, classroomImg4, classroomImg5, classroomImg6]
    const [className, setClassName] = useState("")
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setCreateClassDialog(false);
    };

    const handleCreate = () =>{
      let code = nanoid();
      if(className===""){
        setOpen(true)
      }
      let classroomImg = classroomImages[Math.floor(Math.random()*classroomImages.length)]
      setClassroomData( prevArr =>[ ...prevArr, {code, className, classroomImg, facultyImg, facultyName: "Siddhesh Mane"}])
      setCreateClassDialog(false);
    }

    return (
      <div>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          message="ClassName cannot be blank"
          onClose={()=>{setOpen(false)}}
        />
        <Dialog
          open={createClassDialog}
          onClose={handleClose}
          TransitionComponent={Transition}
          maxWidth="sm"
          fullWidth
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create class</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the name of class and we will create a classroom for you!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Class Name"
              type="text"
              fullWidth
              required
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant = "outlined" color="primary">
              Cancel
            </Button>
            <Button onClick={handleCreate} variant = "contained" color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  export default CreateClass;