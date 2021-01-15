import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import { userState } from '../store/state'

LoggedInUser.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	logInUser: PropTypes.func
}

LoggedInUser.defaultProps = {
	logInUser: () => {},
	logOutUser: () => {}
}

function LoggedInUser ({name, isAuth, logInUser, logOutUser}) {
	return (
		<div className="bg-warning rounded p-3">
			{
				isAuth ?
					<>
						<div>Zalogowany jako: <strong>{name}</strong></div>
						<button className="btn btn-danger" onClick={() => logOutUser()} > Wyloguj </button>
					</>
					:
					<div className="text-center">
						<div className="mb-2">Niezalogowany :(</div>
						<button className="btn btn-light" onClick={() => logInUser('Michał')}> Zaloguj </button>
					</div>
			}
		</div>
	)
}

export default observer(() => {
	const {isAuth, name, logInUser, logOutUser} = userState;
	return <LoggedInUser isAuth={isAuth} name={name} logInUser={logInUser} logOutUser={logOutUser} />
});
