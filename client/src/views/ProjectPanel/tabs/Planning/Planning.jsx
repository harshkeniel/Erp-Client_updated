import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons"

import "./Planning.css"

import confettiImage from "../../../../assets/images/confetti.png"

import kanbanData from "../../../../data/KanbanBoardData"
import Lane from './Lane'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});


const Planning = () => {
	const [tasks, setTasks] = React.useState(kanbanData)
	const [openModal, setOpenModal] = React.useState(false)

	console.log(tasks);


	React.useEffect( () => {
		let allDone = true;

		tasks.forEach(	(task) => {
			if( task.status !== "done")
				allDone = false
		})

		if( allDone )
			setOpenModal(true)

	}, [tasks])

	const handleClose = () => {
		setOpenModal(false);
	}

	return (<>
		<div className="card" style={ { minHeight : "80vh"}}>
			<div className="h2 my-2 mx-3">
			<FontAwesomeIcon icon={ faClipboardCheck } className="mx-3"/>
			Project Kanban Board
			</div>
			
			<hr/>

			<div className="content">
				<div className="d-flex gap-4 p-3 my-2">
					<Lane 
						header="Stories"
						type="story"
						tasks={tasks}
						setTasks={setTasks}
						keyword={"backlog"}
						color={"#242d49"}
					/>
					<Lane 
						header="To Do"
						tasks={tasks}
						setTasks={setTasks}
						keyword={"todo"}

						color={"#af07ff"}
					/>
					<Lane 
						header="Doing"
						tasks={tasks}
						setTasks={setTasks}
						keyword={"doing"}
						color={"#0051ad"}
					/>
					<Lane 
						header="Done"
						tasks={tasks}
						setTasks={setTasks}
						keyword={"done"}
						color={"#009200"}
					/>
				</div>
				
			</div>



		</div>

		<Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
		style={ { minWidth : "fit-content"} }
      >
        <DialogTitle>{"Share your Story ?"}</DialogTitle>
			<DialogContent>
				<div className="d-flex">
					<div className="emoji">
						<img src={confettiImage} alt="" height="200px" />
					</div>
					<div className="p-3">
						<div className="h3">You just completed a feature !!</div>
						<div className="h6">Share your completed milestones with the community to stay accountable and build trust.</div>
					</div>

					
				</div>
			</DialogContent>
			<DialogActions>
			<Button onClick={handleClose} variant="contained">Close</Button>
			<Button onClick={handleClose} variant="contained" color="success">Post Story</Button>
			</DialogActions>
      </Dialog>
	</>)
}

export default Planning