import React from 'react'
import TaskCard from './TaskCard'

const Lane = ({header, type, tasks, setTasks, keyword, color}) => {
	return (
		<div className="card mx-0" style={ { width : "23%" , minHeight : "500px" } }>
			<div className="lane-header" style={ {backgroundColor : color} }>
				<h3>{header}</h3>
			</div>

			{
				type === "story" &&
				<div className="lane-feature">
					Search User Tab
				</div>
			}
			<div className="d-flex flex-column gap-3 py-3 px-2">
				{
					tasks
					.filter( (t) => t.status === keyword )
					.map( (t) => <TaskCard task={t} setTasks={setTasks} key={t.id} />)
				}
			</div>

		</div>
	)
}

export default Lane