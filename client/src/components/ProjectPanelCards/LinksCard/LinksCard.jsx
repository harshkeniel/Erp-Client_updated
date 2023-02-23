import { faArrowUpRightFromSquare, faPlusCircle, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import "./LinksCard.css"

const LinksCard = ({ projectData, setProjectData, cardInfo, propertyName, editable=false }) => {

	const [data, setData] = React.useState({ label : "", url : ""})

	const bgPrimary = { backgroundColor : cardInfo.color}
	const bgLight = { backgroundColor : `${cardInfo.color}33`}
	//const bgMedium = { backgroundColor : `${cardInfo.color}6e`}

	const handleChange = (e) => {
		setData( prev => ({...prev, [e.target.name] : e.target.value }))
	}

	const addToArray = () => {
        if( data.label === "" || data.url === "")
            return

        setProjectData( prev => {
            return ({
                ...prev,
                [propertyName] : [...projectData[propertyName], data]
            })
        });

        setData({ label : "", url : ""});
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
		<div className="card info-card links-card" style={ { minHeight : "100px" } }>
			<div className="header" style={ {...bgPrimary , color : "white"} }>
					<FontAwesomeIcon icon={cardInfo.icon} className="icon"/>
					<div className="h4 fw-bold ms-3">{cardInfo.title}</div>
			</div>

			<div className="content" style={ { backgroundColor : "white"} }>
				{
					projectData[propertyName].map( (item, index) => {
						return (
							<div className="link-tablet">
								<div className="link-label" style={{ ...bgPrimary, color : "white" }}>
									{item.label}
									<a href={item.url} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon"/>
									</a>
									
									
								</div>
								<div className="link-url" style={bgLight}>
									<span style={ {color : "black"} } >
										{item.url.replace("https://", "").replace("www.",  "")}
									</span>
									{
										editable && (
											<FontAwesomeIcon 
												icon={faXmark}
												className="delete-icon"
												onClick={() => removeFromArray(index)}
											/>
										)
									}
								</div>
							</div>
						)
					})
				}
				

			</div>

			{
				editable && (
					<div className="card-footer" style={ bgPrimary }>
						<div className="d-flex flex-column gap-2">
							<input
								type="text"
								placeholder="Label"
								name="label"
								value={data.label}
								onChange={handleChange}
							/>

							<input
								type="url"
								placeholder="URL"
								name="url"
								value={data.url}
								onChange={handleChange}
							/>
						</div>
						<FontAwesomeIcon
							icon={faPlusCircle}
							className="icon"
							style={ { color : "white"} }
							onClick={() => addToArray()}
						/>
					</div>
				)
			}

		</div>
	)
}

export default LinksCard