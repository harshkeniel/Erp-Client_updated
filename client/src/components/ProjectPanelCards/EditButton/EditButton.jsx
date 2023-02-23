import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

import "./EditButton.css"

const EditButton = ( { active, toggleActive, onSubmit, onDismiss } ) => {
    return (
        <span className="top-right">
        {



            active
            ? (<>
                <span
                    className="edit-btn check-btn" 
                    onClick={() => { 
                        toggleActive()
                        onSubmit()
                    }}
                    >
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span 
                    className="edit-btn cross-btn"
                    onClick={() => {
                        toggleActive()
                        onDismiss()
                    }}
                    >
                    <FontAwesomeIcon icon={faXmark}/>
                </span>
            </>)
            : ( 
                <span className="edit-btn" onClick={() => toggleActive()}>
                    <FontAwesomeIcon icon={faPencil}/>
                </span>
            )
    }
    </span>
        
    )
}

export default EditButton