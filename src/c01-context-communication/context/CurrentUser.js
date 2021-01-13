import React, { Component } from 'react'

const UserContext = React.createContext(true);

class CurrentUser extends Component {

	state = {
		name: '',
		isAuth: false
	}

	render () {
		return this.props.children;
	}
}

const contextExport = {
	Provider: CurrentUser,
	Consumer: UserContext.Consumer
}
export default contextExport;
