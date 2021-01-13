import React, { Component } from 'react'
import TopBar from './components/TopBar'

class AppContextCommunication extends Component {

	state = {
		userName: '',
		isAuth: false
	}

	render () {
		const {userName, isAuth} = this.state;
		return (
			<div>
				<header className="jumbotron text-center bg-dark text-light">
					<h1> #C01. Context API </h1>
				</header>
				<main className="container">
					<TopBar title="Witaj w aplikacji z user'em" userName={userName} isAuth={isAuth} />
				</main>
			</div>
		)
	}
}

export default AppContextCommunication
