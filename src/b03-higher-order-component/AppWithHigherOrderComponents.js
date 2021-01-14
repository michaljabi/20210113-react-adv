import React from 'react'
import ShowEUDate from './components/ShowEUDate'
import ShowUSADate from './components/ShowUSADate'
import DeeplyNestedComponentStructure from './components/DeeplyNestedComponentStructure/DeeplyNestedComponentStructure'
// import withDate from './components/hoc/withDate'
import { userService } from './components/hoc/state-of-data'


userService.setUser('Michal', 'Kowalsky')

function AppWithHigherOrderComponents () {

	const todayIs = new Date();

	// const Component = withDate(({date}) => (
	// 	<div>{date.toISOString()}</div>
	// ))

	return (
		<div>
			<header className="jumbotron text-center bg-dark text-light">
				<h1> #B03. HOC </h1>
			</header>
			<main className="container">
				<ShowUSADate date={todayIs} />
				<ShowEUDate date={todayIs} />
				<DeeplyNestedComponentStructure />
			</main>
		</div>
	)
}

export default AppWithHigherOrderComponents
