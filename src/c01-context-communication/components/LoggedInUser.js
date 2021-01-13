import React from 'react'
import PropTypes from 'prop-types'

LoggedInUser.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
}

function LoggedInUser ({name, isAuth}) {
	return (
		<div className="bg-info text-light rounded p-3">
			{
				isAuth ?
					<div>Zalogowany jako: <strong>{name}</strong></div>
					:
					<div className="text-center">
						<div className="mb-2">Niezalogowany :(</div>
						<button className="btn btn-light"> Zaloguj </button>
					</div>
			}
		</div>
	)
}

export default LoggedInUser
