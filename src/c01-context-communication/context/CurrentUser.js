import React, { Component } from 'react'

const UserContext = React.createContext({});

// const test = {
// 	name: 'Hello',
// 	name: 'Andrzej'
// }

// const test = {
// 	name: 'Hello',
// 	auth: {
// 		name: 'Andrzej'
// 	}
// }

class CurrentUser extends Component {

	state = {
		name: '',
		isLoading: true,
		isAuth: false,
		logIn: this.logIn.bind(this),
		logOut: this.logOut.bind(this)
	}

	logIn(name = '') {
		 this.setState({name, isAuth: true})
	}

	logOut() {
		this.setState({name: '', isAuth: false})
	}

	render () {
		 // Alternatywa:
		// <UserContext.Provider value={ {...this.state, logIn: this.logIn, logOut: this.logOut }} >
		return (

			<UserContext.Provider value={this.state} >
				{this.props.children}
			</UserContext.Provider>
		)
	}
}

const contextExport = {
	Provider: CurrentUser,
	Consumer: UserContext.Consumer
}
export default contextExport;

// CEL:

// import CurrentUser from '../context/CurrentUser'
// CurrentUser.Provider
// CurrentUser.Consumer
