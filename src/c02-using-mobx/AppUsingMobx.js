import React from 'react'
import TopBar from './components/TopBar'

function AppUsingMobx () {
	return (
		<div>
			<header className="jumbotron text-center bg-dark text-light">
				<h1> #C02. Using Mobx </h1>
			</header>
			<main className="container">
				<TopBar title="Witaj w aplikacji z user'em" />
			</main>
		</div>
	)
}

export default AppUsingMobx
