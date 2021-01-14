import React from 'react'
import PropTypes from 'prop-types'

LoggedInUser.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	logIn: PropTypes.func.isRequired,
	logOut: PropTypes.func.isRequired,
}

function LoggedInUser ({name, isAuth, logIn, logOut}) {
	return (
		<div className="bg-info text-light rounded p-3">
			{
				isAuth ?
					<div>Zalogowany jako: <strong onClick={logOut} >{name}</strong> </div>
					:
					<div className="text-center">
						<div className="mb-2">Niezalogowany :(</div>
						<button className="btn btn-light" onClick={() => logIn('Andrzej')}> Zaloguj </button>
					</div>
			}
		</div>
	)
}

export default LoggedInUser
