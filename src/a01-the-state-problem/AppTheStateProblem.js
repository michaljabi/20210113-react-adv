
import React from 'react'
import LightBulb from './components/LightBulb'
import OnSwitch from './components/OnSwitch'
import OnSwitch2 from './components/OnSwitch2'

function AppTheStateProblem () {
	return (
		<div>
			<header className="jumbotron text-center bg-dark text-light">
				<h1> #A01. The State problem </h1>
			</header>
			<main className="container">
				<div className="row">
					<div className="col-12 mb-5">
						 <LightBulb />
					</div>
					<div className="col-6 text-right">
						<OnSwitch />
					</div>
					<div className="col-6">
						<OnSwitch2 />
					</div>
				</div>
			</main>
		</div>
	)
}

export default AppTheStateProblem
