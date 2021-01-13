import React from 'react'
import ShowEUDate from './components/ShowEUDate'
import ShowUSADate from './components/ShowUSADate'
import DeeplyNestedComponentStructure from './components/DeeplyNestedComponentStructure/DeeplyNestedComponentStructure'

function AppWithHigherOrderComponents () {

	const todayIs = new Date();

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
