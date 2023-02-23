import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const TaskCard = ({task, setTasks}) => {
    console.log("hi")

    const performAction = (currentValue, dir) => {
        const arr = ["backlog", "todo", "doing", "done"]
        const idx = arr.findIndex(ele => ele === currentValue)

        if(dir === "left")
            return arr[ idx > 0 ? idx-1 : idx ]
        if(dir === "right")
            return arr[ idx < 3 ? idx+1 : idx ]
    }

    const handleButtonClick = (dir) => {
        setTasks( 
            prevTasks => prevTasks.map( 
                (t) => t.id === task.id 
                            ? { ...t, status : performAction(t.status, dir)}
                            : t
            ) 
        )
    }

    return (
        <div className="card task-card">
            <div className="action-btn" onClick={() => handleButtonClick("left")}>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </div>
            <div className="content">
                <span className="py-2 fw-bold">{task.text}</span>
            </div>
            <div className="action-btn" onClick={() => handleButtonClick("right")}>
                <FontAwesomeIcon icon={faAngleRight}/>
            </div>
        </div>
    )
}

export default TaskCard