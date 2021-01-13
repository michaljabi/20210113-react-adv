import React from 'react'
import MemorableQuotes from './components/MemorableQuotes'
import OnlyYodaQuotes from './components/OnlyYodaQuotes'

function AppFunctionAsAChildComponent () {
	return (
		<div>
			<header className="jumbotron text-center bg-dark text-light">
				<h1> #B01. Function as a Child component </h1>
			</header>
			<main className="container">
				   <div className="row">
					   <MemorableQuotes />
					   <OnlyYodaQuotes />
				   </div>
			</main>
		</div>
	)
}

export default AppFunctionAsAChildComponent
