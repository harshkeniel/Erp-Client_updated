import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons" 
import React from 'react'


import "./TagsCard.css"

const TagsCard = ({ projectData, setProjectData, cardInfo, propertyName, editable=false }) => {
    const [newItem, setNewItem] = React.useState("");


    const addToArray = () => {
        if( newItem === "")
            return

        setProjectData( prev => {
            return ({
                ...prev,
                [propertyName] : [...projectData[propertyName], newItem]
            })
        });

        setNewItem("");
    }

    const removeFromArray = (index) => {
        setProjectData( prev => {
            return ({
                ...prev,
                [propertyName] : projectData[propertyName].filter( (item, i) => i !== index)
            })
        })
    }

    return (
        <div className="card tags-card info-card" style={ { minHeight : "100px" } }>
            <div className="header" style={ { backgroundColor : "#242d49", color : "white"} }>
                <FontAwesomeIcon icon={cardInfo.icon} className="icon"/>
                <div className="h4 fw-bold ms-3">{cardInfo.title}</div>
            </div>

            <div className="content" style={ { backgroundColor : `${cardInfo.color}52`} }>
                <div className="d-flex flex-wrap gap-2">
                {   
                    projectData[propertyName].length !== 0
                    ? projectData[propertyName].map( (item, index) => {
                        return (
                            <div 
                                className={`tablet ${editable ? "deletable" : ""}`}
                                style={ { backgroundColor : `${cardInfo.color}6e`} }
                                onClick={() => editable && removeFromArray(index)}
                                key={index}
                            >
                                {item}
                            </div>
                        )
                    })
                    : <div className="w-100 text-center">Empty</div>
                }
                </div>
            </div>

            {
                editable && (
                    <div className="footer" style={ { backgroundColor : "#242d49", color : "white"} }>
                        <input 
                            type="text"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" ? addToArray() : null}
                        />
                        <FontAwesomeIcon
                            icon={faCirclePlus}
                            onClick={addToArray}
                        />
                    </div>
                )
            }

        </div>
    )
}

export default TagsCard