import React from 'react'

import { BookmarkOutlined, BookmarkBorderOutlined } from '@mui/icons-material/BookmarkOutlined';

const BookmarkButton = ({ isActive }) => {
	const [active, setActive] = React.useState(isActive)
	const style = { fontSize : "2rem" }

	const toggleActive = () => {
		setActive( prevActive => !prevActive)
	}

    return ( active
        ? <BookmarkOutlined style={style} onClick={toggleActive}/>
        : <BookmarkBorderOutlined style={style} onClick={toggleActive}/>
    )
}

export default BookmarkButton