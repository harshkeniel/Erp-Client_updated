import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons'

import "./ClapButton.css"

const ClapButton = ({count, className}) => {
	const [active, setActive] = React.useState(false)
	return (
		<button 
			className={`${className} ClapButton ${active ? "isActive" : ""}`}
			onClick={ () => setActive(prevActive => !prevActive)}
		>
			<FontAwesomeIcon icon={faHandsClapping}/>
			<span>{count}</span>
		</button>
	)
}

export default ClapButton