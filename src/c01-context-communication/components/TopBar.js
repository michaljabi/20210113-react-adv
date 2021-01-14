import React from 'react'
import PropTypes from 'prop-types'

import LoggedInUser from './LoggedInUser'
import CurrentUser from '../context/CurrentUser'

TopBar.propTypes = {
	title: PropTypes.string.isRequired
}

function TopBar ({title}) {
	return (
		<div className="d-flex p-5 justify-content-between">
			<h2>{title}</h2>
			<CurrentUser.Consumer>
				{
					(props) => (<LoggedInUser {...props} />)
				}
			</CurrentUser.Consumer>
		</div>
	)
}

export default TopBar
