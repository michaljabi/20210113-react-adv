import React from 'react'
import PropTypes from 'prop-types'

import LoggedInUser from './LoggedInUser'

TopBar.propTypes = {
	title: PropTypes.string.isRequired,
	isAuth: PropTypes.bool.isRequired,
	userName: PropTypes.string.isRequired,
}

function TopBar ({userName, isAuth, title}) {
	return (
		<div className="d-flex p-5 justify-content-between">
			<h2>{title}</h2>
			<LoggedInUser isAuth={isAuth} name={userName} />
		</div>
	)
}

export default TopBar
