import React from 'react'
import AddNewGuest from './components/AddNewGuest'
import ListOfMyBirthdayGuests from './components/ListOfMyBirthdayGuests'
import CounterReport from './components/CounterReport'

function AppUsingMobxMoreComplex () {
	return (
		<div>
			<header className="jumbotron text-center bg-dark text-light">
				<h1> #C03. Using Mobx - More Complex </h1>
			</header>
			<main className="container">
				<AddNewGuest />
				<ListOfMyBirthdayGuests />
				<CounterReport />
			</main>
		</div>
	)
}

export default AppUsingMobxMoreComplex
