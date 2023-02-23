import {
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField,
    Slide, 
    Input,
    InputLabel, 
    IconButton
    } from "@mui/material";
  import { DateTimePicker } from '@mui/x-date-pickers';
  import FileUploadIcon from '@mui/icons-material/FileUpload';
  import React from "react";
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  function CreateAssignment({
    createAssignmentDialog, 
    setCreateAssignmentDialog, 
    assignmentTitle, 
    setAssignmentTitle, 
    assignmentDescription,
    setAssignmentDescription,
    assignmentDue,
    setAssignmentDue,
    assignmentMaterials,
    setAssignmentMaterials,
    setAssignmentData
  }) {

    const handleClose = () => {
        setCreateAssignmentDialog(false);
    };

    const createAssignment = () => {
      setAssignmentData([assignmentTitle, assignmentDescription, assignmentDue, assignmentMaterials])
    }
  
    return (
      <div>
        <Dialog
          open={createAssignmentDialog}
          onClose={handleClose}
          TransitionComponent={Transition}
          maxWidth="sm"
          fullWidth
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Assignment</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the details of new assignment
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Assignment Title"
              type="text"
              fullWidth
              value={assignmentTitle}
              onChange={(e) => setAssignmentTitle(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="Assignment Description"
              type="text"
              fullWidth
              multiline
              value={assignmentDescription}
              onChange={(e) => setAssignmentDescription(e.target.value)}
            />
            <DateTimePicker
              label="Assignment Due"
              value={assignmentDue}
              onChange={(newValue) => setAssignmentDue(newValue)}
              renderInput={(params) => <TextField {...params} style = {{marginTop: "8px"}} fullWidth/>}
            />
            <InputLabel color="primary" style={{marginTop : "8px"}} htmlFor="assignmentMaterial">
              <Input
                type="file"
                id="assignmentMaterial"
                style = {{display: "none"}}
                inputProps = {{multiple: true}}
                onChange={(e) => setAssignmentMaterials(e.target.files)}
              />
                Upload Materials
                <IconButton  color="primary" aria-label="upload materials" component="span">
                  <FileUploadIcon />
                </IconButton>
            </InputLabel>
            <Grid container spacing={"4"}>
              {
                assignmentMaterials && 
                Object.entries(assignmentMaterials).map(([key, value]) => {
                return (
                  <Grid item style = {{display: 'flex'}}>
                    <Chip label={value.name} variant="outlined" color = "secondary" />
                  </Grid>
                  )
                })
              }
                  
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant = "outlined" color = "primary">
              Cancel
            </Button>
            <Button onClick={handleClose} variant = "contained" color = "primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  export default CreateAssignment;