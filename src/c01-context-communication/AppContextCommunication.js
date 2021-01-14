import React from 'react'
import TopBar from './components/TopBar'
import CurrentUser from './context/CurrentUser'
import withAuth from './context/withAuth'

function Info({auth}) {
	return <span> {auth.name}</span>
}

const UserInfo = withAuth(Info);

function AppContextCommunication () {

	return (
		<CurrentUser.Provider>
			<header className="jumbotron text-center bg-dark text-light">
				<h1> #C01. Context API <UserInfo/> </h1>
			</header>
			<main className="container">
				<TopBar title="Witaj w aplikacji z user'em" />
			</main>
		</CurrentUser.Provider>
	)
}

export default AppContextCommunication
